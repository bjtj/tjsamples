package com.example.livedataexample

import android.annotation.SuppressLint
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.lifecycle.Observer
import androidx.lifecycle.lifecycleScope
import com.example.livedataexample.databinding.ActivityMainBinding
import kotlinx.coroutines.launch

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    private val favViewMode: FavoritesViewModel by viewModels()
    private var favList: MutableList<Favorite> = mutableListOf()

    @SuppressLint("NotifyDataSetChanged")
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

        val adapter = GenericListAdapter(
            favList,
            R.layout.fav_listitem,
            onBind = { view, data, _ ->
                view.findViewById<TextView>(R.id.text).setText(data.name)
                view.findViewById<Button>(R.id.remove_button).setOnClickListener {
                    favViewMode.removeFavorite(data)
                    Toast.makeText(this, "Remove ${data.name}", Toast.LENGTH_SHORT).show()
                }
            }
        )

        val favObserver = Observer<List<Favorite>> {
            favList.clear()
            favList.addAll(it)
            lifecycleScope.launch {
                adapter.notifyDataSetChanged()
            }
        }

        favViewMode.favorites.observe(this, favObserver)

        binding.recyclerview.adapter = adapter

        binding.addFavFab.setOnClickListener {

            val editText = EditText(this)

            AlertDialog.Builder(this)
                .setTitle("Add Favorite")
                .setView(editText)
                .setPositiveButton("Add") { _, _ ->
                    editText.text.toString().let {
                        if (it.isNotEmpty()) {
                            favViewMode.addFavorite(Favorite(Favorite.nextId(), it, System.currentTimeMillis()))
                            Toast.makeText(this, "Add $it", Toast.LENGTH_SHORT).show()
                        }
                    }
                }
                .setNegativeButton("Cancel") { _, _ -> }
                .show()
        }
    }
}