package com.example.navigationwithcompose.compose.detail

import android.annotation.SuppressLint
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.example.navigationwithcompose.NavTopBar
import com.example.navigationwithcompose.data.Item

@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun DetailScreen(onBackClick: () -> Unit, item: Item? = null) {

    Scaffold(
        topBar = {
            NavTopBar(
                title = "${item?.name ?: "NOITEM"} Detail",
                canNavigateBack = true,
                navigateUp = onBackClick
            )
        }
    ) {
        Column(modifier = Modifier.padding(top = it.calculateTopPadding())) {
            if (item == null) {
                Text(text = "Item not found")
            } else {
                Text(text = "ID: ${item.id}")
                Text(text = "Name: ${item.name}")
                Text(text = "Description: ${item.description}")
            }

        }
    }
}