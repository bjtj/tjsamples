package com.example.roomexample

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Log
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.setPadding
import androidx.lifecycle.asLiveData
import androidx.lifecycle.lifecycleScope
import androidx.room.Room
import com.example.roomexample.data.User
import com.example.roomexample.data.UserDao
import com.example.roomexample.database.AppDatabase
import com.example.roomexample.databinding.ActivityMainBinding
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var userDao: UserDao

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


        val db = Room.databaseBuilder(applicationContext, AppDatabase::class.java, "database-name")
            .addMigrations(AppDatabase.MIGRATION_1_2)
            .build()

        userDao = db.userDao()

        val list = mutableListOf<User>()

        val layoutId = android.R.layout.simple_list_item_1
        val adapter =
            GenericListAdapter(list, layoutId) { view, item, _ ->
                val name = "${item.firstName} ${item.lastName}"
                view.findViewById<TextView>(android.R.id.text1).text = name
                view.setOnClickListener {
                    Toast.makeText(this, name, Toast.LENGTH_SHORT).show()
                }
                view.setOnLongClickListener {
                    showDeleteDialog(item)
                    true
                }
            }

        userDao.getAll().asLiveData().observe(this) {
            list.clear()
            list.addAll(it)
            adapter.notifyDataSetChanged()
        }

        binding.recyclerview.adapter = adapter

        binding.clearButton.setOnClickListener {
            lifecycleScope.launch(Dispatchers.IO) {
                userDao.deleteAll()
            }
        }

        binding.addButton.setOnClickListener {
            showAddDialog()
        }
    }

    @SuppressLint("SetTextI18n")
    private fun showAddDialog() {

        val view = LinearLayout(this)
        view.orientation = LinearLayout.VERTICAL
        view.setPadding(16)
        val firstName = EditText(this)
        val lastName = EditText(this)
        view.addView(TextView(this).apply { text = "First Name" })
        view.addView(firstName)
        view.addView(TextView(this).apply { text = "Last Name" })
        view.addView(lastName)

        AlertDialog.Builder(this)
            .setTitle("Add User")
            .setView(view)
            .setPositiveButton("Yes") { dialog, _ ->
                dialog.dismiss()
                lifecycleScope.launch(Dispatchers.IO) {
                    userDao.insertUser(
                        User(
                            firstName = firstName.text.toString(),
                            lastName = lastName.text.toString()
                        )
                    )
                }
            }
            .setNegativeButton("No") { dialog, _ ->
                dialog.dismiss()
            }
            .show()
    }

    private fun showDeleteDialog(user: User) {
        val name = "${user.firstName} ${user.lastName}"
        AlertDialog.Builder(this)
            .setTitle("Delete User")
            .setMessage("Are you sure you want to delete $name?")
            .setPositiveButton("Yes") { dialog, _ ->
                dialog.dismiss()
                lifecycleScope.launch(Dispatchers.IO) {
                    userDao.delete(user)
                }
            }
            .setNegativeButton("No") { dialog, _ ->
                dialog.dismiss()
            }
            .show()
    }

    companion object {
        val TAG = MainActivity::class.java.simpleName
    }
}