package org.example

import okhttp3.OkHttpClient
import okhttp3.Request

class App {
    private val client = OkHttpClient()

    fun run(url: String): String {
        val request = Request.Builder()
            .url(url)
            .build()

        val response = client.newCall(request).execute()
        return response.body()!!.string()
    }
}

fun main() {
    val response = App().run("https://raw.github.com/square/okhttp/master/README.md")
    println(response)
}
