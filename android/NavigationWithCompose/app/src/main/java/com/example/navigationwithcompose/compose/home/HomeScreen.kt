package com.example.navigationwithcompose.compose.home

import android.annotation.SuppressLint
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.example.navigationwithcompose.NavTopBar
import com.example.navigationwithcompose.data.Item

@OptIn(ExperimentalMaterial3Api::class)
@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun HomeScreen(onItemClick: (Item) -> Unit, items: List<Item>) {
    Scaffold(
        topBar = {
            NavTopBar(
                title = "Home Screen",
                canNavigateBack = false,
                navigateUp = { /*TODO*/ }
            )
        }
    ) {
        Column(modifier = Modifier.padding(top = it.calculateTopPadding())) {
            items.forEach { item ->
                Button(onClick = { onItemClick(item) }) {
                    Text(text = "${item.name}")
                }
            }
        }
    }
}