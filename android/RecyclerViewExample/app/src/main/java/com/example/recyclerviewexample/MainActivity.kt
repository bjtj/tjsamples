package com.example.recyclerviewexample

import android.annotation.SuppressLint
import android.os.Bundle
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {

    var list = mutableListOf("AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG", "HHH", "III", "JJJ")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        val recyclerView = findViewById<RecyclerView>(R.id.recyclerview)

        val adapter = GenericListAdapter(list, android.R.layout.simple_list_item_1) { view, item, _ ->
            view.findViewById<TextView>(android.R.id.text1).text = item
            view.setOnClickListener {
                Toast.makeText(this, item, Toast.LENGTH_SHORT).show()
            }
            view.setOnLongClickListener {
                showRemoveDialog(item)
                true
            }
        }

        recyclerView.adapter = adapter
    }

    @SuppressLint("NotifyDataSetChanged")
    fun showRemoveDialog(item: String) {
        AlertDialog.Builder(this)
            .setTitle("Remove item")
            .setMessage("Do you want to remove $item?")
            .setPositiveButton("Yes") { _, _ ->
                list.remove(item)
                (findViewById<RecyclerView>(R.id.recyclerview).adapter as GenericListAdapter<*>).notifyDataSetChanged()
            }
            .setNegativeButton("No") { _, _ -> }
            .show()
    }
}