package com.example.permissionsample

import android.Manifest
import android.annotation.SuppressLint
import android.app.AlertDialog
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.permissionsample.databinding.ActivityMainBinding
import com.google.android.material.snackbar.Snackbar

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

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

        handlePermissions()
    }

    @SuppressLint("SetTextI18n")
    private fun handlePermissions() {
        val checker = CheckPermission.Builder(this)
            .required(PERMISSIONS_REQUIRED)
            .granted { Log.d(TAG, "permissions granted: $it") }
            .denied { Log.d(TAG, "permissions denied: $it") }
            .shouldShowRequestPermissionRationale { checkPermission, rationaleResult ->
                val builder = AlertDialog.Builder(this)
                with(builder) {
                    val showRationales = rationaleResult.filter { it.value }.map { it.key }
                    setTitle("Permission required")
                    setMessage("This app needs ${showRationales.joinToString()} permissions to work properly.")
                    setPositiveButton("OK") { _, _ -> checkPermission.request(showRationales.toTypedArray()) }
                    setNegativeButton("Cancel") { _, _ ->
                        checkPermission.finish()
                        Toast.makeText(
                            this@MainActivity,
                            "Permission denied",
                            Toast.LENGTH_SHORT
                        ).show()
                    }
                    builder.show()
                }
            }
            .allGranted { Log.d(TAG, "all permissions are granted") }
            .finished {
                Snackbar.make(
                    findViewById(R.id.main),
                    "Permission result: $it",
                    Snackbar.LENGTH_SHORT
                ).show()
                binding.text.text = "Permission result: $it"
            }
            .build()

        checker.start()
    }

    companion object {

        // Checking Permissions
        private val TAG = MainActivity::class.java.simpleName
        private val PERMISSIONS_REQUIRED = arrayOf(
            Manifest.permission.CAMERA,
            Manifest.permission.RECORD_AUDIO
        )
    }
}
