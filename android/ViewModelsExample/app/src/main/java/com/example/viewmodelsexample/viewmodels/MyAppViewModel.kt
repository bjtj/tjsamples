package com.example.viewmodelsexample.viewmodels

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

data class MyAppState(
    val message: String = ""
)

class MyAppViewModel : ViewModel() {
    private val _appState = MutableStateFlow(
        MyAppState(
            message = "Default message"
        )
    )
    val appState = _appState.asStateFlow()

    fun updateMessage(message: String) {
        _appState.update {
            it.copy(message = message)
        }
    }
}