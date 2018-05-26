package com.tjapp.cam

import android.Manifest
import android.app.AlertDialog
import android.app.Dialog
import android.os.Bundle
import android.support.v4.app.DialogFragment
import android.util.Log
import android.view.KeyEvent

class ConfirmDialog : DialogFragment() {

    private var TAG: String = "ConfirmDialog"
    private var REQUEST_CAMERA = 1

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog =
            AlertDialog.Builder(activity)
                    .setMessage(R.string.request_permission)
                    .setPositiveButton(android.R.string.ok) { _, _ ->
                        Log.d(TAG, "ok")
                        parentFragment?.requestPermissions(arrayOf(Manifest.permission.CAMERA), REQUEST_CAMERA)
                    }
                    .setNegativeButton(android.R.string.cancel) {_, _ ->
                        Log.d(TAG, "cancel")
                        parentFragment?.activity?.finish()
                    }
                    .setOnKeyListener { dialog, keyCode, keyEvent ->
                        Log.d(TAG, "key event")
                        if (keyCode == KeyEvent.KEYCODE_BACK) {
                            Log.d(TAG, "back key")
                            parentFragment?.activity?.finish()
                            dialog.dismiss()
                        }
                        true
                    }
                    .create()
                    .apply {
                        setCanceledOnTouchOutside(false)
                    }
}