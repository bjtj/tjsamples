package com.example.composelazycolumn

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

class AppViewModel : ViewModel() {

    private var _items = MutableStateFlow(listOf<Item>())
    val items = _items.asStateFlow()

    init {
        Thread {
            while (true) {
                Thread.sleep(1000)
                items.value.forEach {
                    updateItem(it.copy(count = it.count + 1))
                }
            }
        }.start()
    }

    fun addItem(item: Item) {
        _items.update { it + item }
    }

    fun removeItem(item: Item) {
        _items.update { it - item }
    }

    fun clearItems() {
        _items.update { emptyList() }
    }

    fun updateItem(item: Item) {
        _items.update { items ->
            items.map {
                if (it.name == item.name) item else it
            }
        }
    }
}
