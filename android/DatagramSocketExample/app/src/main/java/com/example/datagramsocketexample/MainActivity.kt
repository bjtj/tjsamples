package com.example.datagramsocketexample

import android.annotation.SuppressLint
import android.os.Bundle
import android.os.SystemClock
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.datagramsocketexample.databinding.ActivityMainBinding
import kotlinx.coroutines.launch
import java.io.IOException
import java.net.InetSocketAddress
import java.nio.ByteBuffer
import java.nio.channels.DatagramChannel
import java.nio.channels.SelectionKey
import java.nio.channels.Selector
import java.util.Date


class MainActivity : AppCompatActivity() {

    data class SSDPResponse(val timestamp: String, val address: String, val data: String)

    private lateinit var binding: ActivityMainBinding

    @SuppressLint("NotifyDataSetChanged", "SetTextI18n")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        val list = mutableListOf<SSDPResponse>()
        val adapter =
            GenericListAdapter(list, android.R.layout.simple_list_item_2) { view, data, _ ->
                view.findViewById<android.widget.TextView>(android.R.id.text1).text =
                    "From: ${data.address} (Time: ${data.timestamp})"
                view.findViewById<android.widget.TextView>(android.R.id.text2).apply {
                    typeface = android.graphics.Typeface.MONOSPACE
                    text = data.data
                }
            }

        binding.sendMsearchButton.setOnClickListener {
            Thread {
                sendMSearch {
                    lifecycleScope.launch {
                        list.add(it)
                        adapter.notifyDataSetChanged()
                        binding.recyclerView.layoutManager?.smoothScrollToPosition(
                            binding.recyclerView,
                            null,
                            list.size - 1
                        )
                    }
                }

            }.start()
        }

        binding.recyclerView.adapter = adapter
        (binding.recyclerView.layoutManager as LinearLayoutManager).reverseLayout = true
    }

    private fun sendMSearch(onSSDPResponse: (response: SSDPResponse) -> Unit) {
        val TIMEOUT = 3000
        var channel: DatagramChannel? = null
        try {
            val packet = "M-SEARCH * HTTP/1.1\r\n" +
                    "Host: 239.255.255.250:1900\r\n" +
                    "ST: upnp:rootdevice\r\n" +
                    "MX: 3\r\n" +
                    "MAN: \"ssdp:discover\"\r\n" +
                    "User-Agent: UPnP/1.0 App/1.0 Linux/1.0\r\n" +
                    "\r\n"

            channel = DatagramChannel.open()

            channel.configureBlocking(false)
            val selector = Selector.open()
            channel.register(selector, SelectionKey.OP_READ)

            val tick = SystemClock.uptimeMillis()
            println("SENDING...")
            channel.send(
                ByteBuffer.wrap(packet.toByteArray()),
                InetSocketAddress("239.255.255.250", 1900)
            )
            println("SENDING...DONE")

            val buffer = ByteBuffer.allocate(4096)

            while (!Thread.interrupted()) {
                if (SystemClock.uptimeMillis() - tick >= TIMEOUT) {
                    println("TIMEOUT")
                    break
                }

                if (selector.select(100) <= 0) {
                    continue
                }

                val keys = selector.selectedKeys().iterator()

                while (keys.hasNext()) {
                    val key = keys.next()
                    val currentChannel = key.channel() as DatagramChannel

                    buffer.clear()
                    val remoteAddress = currentChannel.receive(buffer)

                    if (buffer.remaining() <= 0) {
                        keys.remove()
                        continue
                    }

                    if (remoteAddress != null) {
                        buffer.flip()

                        String(buffer.array(), buffer.position(), buffer.remaining()).let {
                            println("Received: $it")
                            onSSDPResponse(
                                SSDPResponse(
                                    Date().toString(),
                                    remoteAddress.toString(),
                                    it
                                )
                            )
                        }
                    }

                    keys.remove()
                }
            }
        } catch (e: IOException) {
            e.printStackTrace()
        } finally {
            if (channel != null) {
                try {
                    channel.close()
                } catch (e: IOException) {
                    e.printStackTrace()
                }
            }
        }
    }

}