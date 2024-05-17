package com.example.datastore

import android.content.Context
import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.datastore.core.DataStore
import androidx.datastore.dataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.intPreferencesKey
import androidx.datastore.preferences.preferencesDataStore
import androidx.lifecycle.lifecycleScope
import com.example.datastore.databinding.ActivityMainBinding
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.launch

// datastore preference
private val Context.dataStore: DataStore<Preferences> by preferencesDataStore("settings")

// datastore protobuf
val Context.settingsDataStore: DataStore<Settings> by dataStore(
    fileName = "settings.pb",
    serializer = SettingsSerializer
)

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    private val exampleCounterFlow: Flow<Int> by lazy {
        this.dataStore.data
            .map { preferences ->
                preferences[EXAMPLE_COUNTER] ?: 0
            }
    }

    private val exampleCounterProtoFlow: Flow<Int> by lazy {
        this.settingsDataStore.data
            .map { settings ->
                settings.exampleCounter
            }
    }


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        // datastore preference
        lifecycleScope.launch {
            exampleCounterFlow.collect {
                binding.textNumber1.text = it.toString()
            }
        }

        binding.buttonPlusOne.setOnClickListener {
            lifecycleScope.launch {
                this@MainActivity.dataStore.edit {
                    val currentCounterValue = it[EXAMPLE_COUNTER] ?: 0
                    it[EXAMPLE_COUNTER] = currentCounterValue + 1
                }
            }
        }

        // datastore protobuf
        lifecycleScope.launch {
            exampleCounterProtoFlow.collect {
                binding.textNumber2.text = it.toString()
            }
        }

        binding.buttonPlusOne2.setOnClickListener {
            lifecycleScope.launch {
                this@MainActivity.settingsDataStore.updateData { settings ->
                    settings.toBuilder().setExampleCounter(settings.exampleCounter + 1).build()
                }
            }
        }
    }

    companion object {
        val EXAMPLE_COUNTER = intPreferencesKey("example_counter")
    }
}