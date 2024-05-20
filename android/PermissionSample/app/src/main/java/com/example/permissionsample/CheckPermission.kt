package com.example.permissionsample

import android.content.pm.PackageManager
import androidx.activity.ComponentActivity
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat

typealias OnAllGranted = () -> Unit
typealias OnPermissionCallback = (permission: String) -> Unit
typealias OnFinished = (permissionResultMap: Map<String, Boolean>) -> Unit
typealias ShouldShowRequestPermissionRationaleCallback = (checkPermission: CheckPermission, shouldShowRationaleResultMap: Map<String, Boolean>) -> Unit

class CheckPermission(private var activity: ComponentActivity) {

    data class PermissionItem(
        val permission: String,
        val onGranted: OnPermissionCallback?,
        val onDenied: OnPermissionCallback?,
    )

    fun start() {
        if (hasPermissions()) {
            onAllGranted?.invoke()
            onFinished?.invoke(permissionItems.associate { it.permission to true })
        } else {
            if (shouldShowRequestPermissionRationaleCallback != null) {
                val rationalResult = shouldShowRationale()
                if (rationalResult.any { it.value }) {
                    shouldShowRequestPermissionRationaleCallback!!.invoke(this, rationalResult)
                } else {
                    request()
                }
            } else {
                request()
            }
        }
    }

    fun hasPermissions(): Boolean {
        permissionResults = permissionItems.associate { it.permission to (ContextCompat.checkSelfPermission(activity, it.permission) == PackageManager.PERMISSION_GRANTED) }
        return permissionResults.all { it.value }
    }

    fun shouldShowRationale(): Map<String, Boolean> {
        return permissionItems.map { it.permission }.associateWith {
            ActivityCompat.shouldShowRequestPermissionRationale(activity, it)
        }
    }

    fun request() {
        request(permissionItems.map { it.permission }.toTypedArray())
    }

    fun request(permissions: Array<String>) {
        launcher.launch(permissions)
    }

    fun finish() {
        onFinished?.invoke(permissionResults)
    }

    private var permissionItems = mutableListOf<PermissionItem>()
    var onAllGranted: OnAllGranted? = null
    var onFinished: OnFinished? = null
    var shouldShowRequestPermissionRationaleCallback: ShouldShowRequestPermissionRationaleCallback? = null
    var permissionResults = mapOf<String, Boolean>()
    private val launcher =
        activity.registerForActivityResult(ActivityResultContracts.RequestMultiplePermissions()) { permissions ->
            permissions.forEach {
                if (it.value) {
                    permissionItems.find { item -> item.permission == it.key }?.onGranted?.invoke(it.key)
                } else {
                    permissionItems.find { item -> item.permission == it.key }?.onDenied?.invoke(it.key)
                }
            }

            if (permissions.all { it.value }) {
                onAllGranted?.invoke()
            }

            onFinished?.invoke(permissions)
        }

    /**
     * Builder class for CheckPermission
     */
    class Builder(private var activity: ComponentActivity) {
        private val permissionItems = mutableListOf<PermissionItem>()
        private var onAllGranted: (() -> Unit)? = null
        private var onFinished: OnFinished? = null
        var shouldShowRequestPermissionRationaleCallback: ShouldShowRequestPermissionRationaleCallback? = null

        fun required(permission: String): RequiredContextBuilder {
            return RequiredContextBuilder(this, arrayOf(permission))
        }

        fun required(permissions: Array<String>): RequiredContextBuilder {
            return RequiredContextBuilder(this, permissions)
        }

        fun addPermission(
            permission: String,
            onGranted: OnPermissionCallback?,
            onDenied: OnPermissionCallback?,
        ): Builder {
            permissionItems.add(PermissionItem(permission, onGranted, onDenied))
            return this
        }

        fun allGranted(onAllGranted: () -> Unit): Builder {
            this.onAllGranted = onAllGranted
            return this
        }

        fun finished(onFinished: OnFinished): Builder {
            this.onFinished = onFinished
            return this
        }

        fun shouldShowRequestPermissionRationale(callback: ShouldShowRequestPermissionRationaleCallback): Builder {
            this.shouldShowRequestPermissionRationaleCallback = callback
            return this
        }

        fun build(): CheckPermission {
            val checkPermission = CheckPermission(activity)
            checkPermission.permissionItems = permissionItems
            checkPermission.onAllGranted = onAllGranted
            checkPermission.shouldShowRequestPermissionRationaleCallback = shouldShowRequestPermissionRationaleCallback
            checkPermission.onFinished = onFinished
            return checkPermission
        }

    }

    /**
     * RequiredContextBuilder class for CheckPermission
     */
    open class RequiredContextBuilder(
        val builder: Builder,
        private val permissions: Array<String>
    ) {

        private var onGranted: OnPermissionCallback? = null
        private var onDenied: OnPermissionCallback? = null

        fun done(): Builder {
            if (permissions.isNotEmpty()) {
                permissions.forEach {
                    builder.addPermission(it, onGranted, onDenied)
                }
            }
            return builder
        }

        fun required(permission: String): RequiredContextBuilder {
            done()
            return builder.required(permission)
        }

        fun required(permissions: Array<String>): RequiredContextBuilder {
            done()
            return builder.required(permissions)
        }

        fun granted(onGranted: OnPermissionCallback): RequiredContextBuilder {
            this.onGranted = onGranted
            return this
        }

        fun denied(onDenied: OnPermissionCallback): RequiredContextBuilder {
            this.onDenied = onDenied
            return this
        }

        fun allGranted(onAllGranted: () -> Unit): Builder {
            done()
            return builder.allGranted(onAllGranted)
        }

        fun finished(onFinished: OnFinished): Builder {
            done()
            return builder.finished(onFinished)
        }

        fun shouldShowRequestPermissionRationale(callback: ShouldShowRequestPermissionRationaleCallback): Builder {
            done()
            return builder.shouldShowRequestPermissionRationale(callback)
        }

        fun build(): CheckPermission {
            done()
            return builder.build()
        }
    }


}
