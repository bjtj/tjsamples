package com.example.ktorserverexample

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Log
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.lifecycle.lifecycleScope
import io.ktor.serialization.gson.gson
import io.ktor.server.application.ApplicationStarted
import io.ktor.server.application.call
import io.ktor.server.application.install
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.netty.NettyApplicationEngine
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import io.ktor.server.response.respond
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import kotlinx.coroutines.launch

class MainActivity : AppCompatActivity() {

    lateinit var engine: NettyApplicationEngine

    @SuppressLint("SetTextI18n")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        val text = findViewById<TextView>(R.id.text)

        engine = embeddedServer(Netty, 0) {
            install(ContentNegotiation) {
                gson {}
            }
            routing {
                get("/") {
                    call.respond(mapOf("message" to "Hello world"))
                }
            }
        }

        engine.environment.monitor.subscribe(ApplicationStarted) {
            lifecycleScope.launch {
                text.text = "Server listening on\n"
                engine.resolvedConnectors().forEach {
                    text.append(" - http://${it.host}:${it.port}\n")
                    Log.d(TAG, "Server listening on http://${it.host}:${it.port}")
                }
            }
        }
        engine.start()
    }

    override fun onDestroy() {
        super.onDestroy()
        engine.stop(1000, 1000)
    }

    companion object {
        private const val TAG = "MainActivity"
    }
}
