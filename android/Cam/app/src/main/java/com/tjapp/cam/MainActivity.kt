package com.tjapp.cam

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private final var REQUEST_CAMERA_PERMISSION = 1
    private var TAG: String = "Main"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        if (false) {
            startActivity(Intent(this, LiveCameraActivity::class.java))
            return
        }

        savedInstanceState ?: supportFragmentManager.beginTransaction()
                .replace(R.id.container, CameraFragment.newInstance())
                .commit()
    }
}
