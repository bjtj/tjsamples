package com.example.androidauthentication.ui.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.example.androidauthentication.ui.screens.home.HomeScreen

@Composable
fun App() {
    Scaffold(modifier = Modifier.fillMaxSize()) {
        Column(modifier = Modifier.padding(top = it.calculateTopPadding())) {
            HomeScreen()
        }
    }
}
