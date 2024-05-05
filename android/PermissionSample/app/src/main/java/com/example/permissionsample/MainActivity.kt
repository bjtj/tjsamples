package com.example.permissionsample

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {

    // Activity Result Api
    private val requestPermission =
        registerForActivityResult(ActivityResultContracts.RequestMultiplePermissions()) { permissions ->
            permissions.forEach { actionMap ->
                Log.d(TAG, "actionMap.key: ${actionMap.key}, actionMap.value: ${actionMap.value}")
                when (actionMap.key) {
                    Manifest.permission.CAMERA -> {
                        if (actionMap.value) {
                            Log.i("DEBUG", "Camera Permission Granted")
                        } else {
                            Log.i("DEBUG", "Camera Permission Denied")
                        }
                    }
                }
            }
        }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        checkPermissions()
    }

    private fun checkPermissions() {
        if (!hasPermissions(this)) {
            Toast.makeText(this, "Permissions not granted", Toast.LENGTH_SHORT).show()
            // 1. requestPermissions() --> onRequestPermissionsResult()
//            requestPermissions(PERMISSIONS_REQUIRED, REQUEST_CODE)
            // 2. requestPermission.launch() --> onRequestPermissionsResult()
            requestPermission.launch(PERMISSIONS_REQUIRED)
        }
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == REQUEST_CODE) {

            Log.d(TAG, "PackageManager.PERMISSION_GRANTED: ${PackageManager.PERMISSION_GRANTED}") // 0
            Log.d(TAG, "PackageManager.PERMISSION_DENIED: ${PackageManager.PERMISSION_DENIED}")   // -1

            Log.d(TAG, "permissions.size: ${permissions.size}")
            permissions.forEachIndexed { index, permission ->
                Log.d(TAG, " - permissions[$index]: $permission")
            }

            Log.d(TAG, "grantResults.size: ${grantResults.size}")
            grantResults.forEachIndexed { index, grantResult ->
                Log.d(TAG, " - grantResults[$index]: $grantResult")
            }

            if (grantResults.all { it == PackageManager.PERMISSION_GRANTED }) {
                Toast.makeText(this, "Permissions granted", Toast.LENGTH_SHORT).show()
            } else {
                Toast.makeText(this, "Permissions not granted", Toast.LENGTH_SHORT).show()
            }
        }
    }

    companion object {

        // Checking Permissions
        private val TAG = MainActivity::class.java.simpleName
        private const val REQUEST_CODE = 10
        private val PERMISSIONS_REQUIRED = arrayOf(
            Manifest.permission.CAMERA,
            Manifest.permission.RECORD_AUDIO
        )

        fun hasPermissions(context: Context) = PERMISSIONS_REQUIRED.all {
            ContextCompat.checkSelfPermission(context, it) == PackageManager.PERMISSION_GRANTED
        }
    }
}
