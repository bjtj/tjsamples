package com.example.composelazycolumn

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ModalBottomSheet
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.composelazycolumn.ui.theme.ComposeLazyColumnTheme

class MainActivity : ComponentActivity() {

    private val appViewModel: AppViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            ComposeLazyColumnTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    App(appViewModel = appViewModel, modifier = Modifier.padding(innerPadding))
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun App(appViewModel: AppViewModel = AppViewModel(), modifier: Modifier = Modifier) {
    val items = appViewModel.items.collectAsState()
    var showAddForm by remember { mutableStateOf(false) }

    Column(modifier = modifier) {
        Button(onClick = { showAddForm = true }, modifier = Modifier.fillMaxWidth()) {
            Text("Add Item")
        }
        LazyColumn(modifier = Modifier.fillMaxSize()) {
            itemsIndexed(items.value, key = { _, item -> item.name }) { _, item ->
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(8.dp)
                ) {
                    Text(item.name, modifier = Modifier.weight(1f))
                    Text(item.count.toString())
                    IconButton(onClick = {
                        appViewModel.updateItem(item.copy(count = item.count + 1))
                    }) {
                        Icon(Icons.Default.Add, contentDescription = "Add")
                    }
                    IconButton(onClick = {
                        appViewModel.removeItem(item)
                    }) {
                        Icon(Icons.Default.Delete, contentDescription = "Delete")
                    }
                }
            }
        }
        if (showAddForm) {
            ModalBottomSheet(
                onDismissRequest = { showAddForm = false }
            ) {
                AddItemForm(
                    onAddItem = {
                        appViewModel.addItem(it)
                        showAddForm = false
                    }
                )
            }
        }
    }
}

@Composable
fun AddItemForm(onAddItem: (Item) -> Unit) {

    var name by remember { mutableStateOf("") }

    Column {
        TextField(value = name, onValueChange = { name = it }, modifier = Modifier.fillMaxWidth())
        Button(onClick = { onAddItem(Item(name, 0)) }, modifier = Modifier.fillMaxWidth()) {
            Text("Add Item")
        }
    }
}


@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    ComposeLazyColumnTheme {
        App()
    }
}
