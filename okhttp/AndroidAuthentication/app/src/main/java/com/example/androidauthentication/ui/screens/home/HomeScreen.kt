package com.example.androidauthentication.ui.screens.home

import android.widget.Toast
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import okhttp3.Credentials
import okhttp3.OkHttpClient
import okhttp3.Request
import kotlin.concurrent.thread

@Composable
fun HomeScreen() {

    val context = LocalContext.current

    val responseCode = remember {
        mutableIntStateOf(0)
    }
    val responseMessage = remember {
        mutableStateOf("")
    }
    val body = remember {
        mutableStateOf("")
    }

    val showUserPassword = remember {
        mutableStateOf(false)
    }

    var user = remember {
        mutableStateOf("")
    }
    var password = remember {
        mutableStateOf("")
    }

    val client = OkHttpClient.Builder().authenticator { _, response ->

        if (response.request.header("Authorization") != null) {
            return@authenticator null
        }

        if (user.value.isEmpty() || password.value.isEmpty()) {
            // show dialog to get user and password
            showUserPassword.value = true
            return@authenticator null
        }

        val credential = Credentials.basic(user.value, password.value)

        user.value = ""
        password.value = ""

        response.request.newBuilder()
            .header("Authorization", credential)
            .build()
    }.build()

    val request = Request.Builder()
        .url("https://httpbin.org/basic-auth/jesse/password1")
        .build()

    val sendRequest = {
        responseCode.value = 0
        responseMessage.value = ""
        body.value = ""
        thread {
            client.newCall(request).execute().use { response ->
                responseCode.intValue = response.code
                responseMessage.value = response.message
                body.value = response.body!!.string()
            }
        }
    }

    Column {
        Button(onClick = {
            sendRequest()
        }) {
            Text("Request (jesse/password1)")
        }

        Text("Status: ${responseCode.intValue} (message: ${responseMessage.value})")
        Text("Body: ${body.value}")

        if (showUserPassword.value) {
            AlertDialog(
                onDismissRequest = {
                    showUserPassword.value = false
                },
                confirmButton = {
                    Button(onClick = {
                        showUserPassword.value = false
                        sendRequest()
                    }) {
                        Text("OK")
                    }
                },
                dismissButton = {
                    Button(onClick = {
                        showUserPassword.value = false
                        Toast.makeText(
                            context,
                            "cancelled",
                            Toast.LENGTH_SHORT
                        ).show()
                    }) {
                        Text("Cancel")
                    }
                },
                title = { Text("Enter username and password") },
                text = {
                    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        TextField(
                            value = user.value,
                            onValueChange = { user.value = it },
                            singleLine = true,
                            label = { Text("username") })
                        TextField(
                            value = password.value,
                            onValueChange = { password.value = it },
                            visualTransformation = PasswordVisualTransformation(),
                            singleLine = true,
                            label = { Text("password") })

                    }
                })
        }
    }
}
