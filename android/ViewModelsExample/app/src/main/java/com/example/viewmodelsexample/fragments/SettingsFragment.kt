package com.example.viewmodelsexample.fragments

import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.viewModels
import com.example.viewmodelsexample.databinding.FragmentSettingsBinding
import com.example.viewmodelsexample.viewmodels.MyAppViewModel

class SettingsFragment : Fragment() {

    private lateinit var binding: FragmentSettingsBinding

    val myAppViewModel: MyAppViewModel by viewModels(
        ownerProducer = { requireActivity() }
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentSettingsBinding.inflate(inflater, container, false)
        binding.editMessage.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {
            }

            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
            }

            override fun afterTextChanged(s: Editable?) {
                myAppViewModel.updateMessage(s.toString())
            }
        })
        binding.editMessage.setText(myAppViewModel.appState.value.message)
        return binding.root
    }

    companion object {
    }
}