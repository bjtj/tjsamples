package com.example.viewmodelsexample.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.viewModels
import androidx.lifecycle.lifecycleScope
import androidx.navigation.Navigation
import com.example.viewmodelsexample.R
import com.example.viewmodelsexample.databinding.FragmentStartBinding
import com.example.viewmodelsexample.viewmodels.MyAppViewModel
import kotlinx.coroutines.launch

class StartFragment : Fragment() {

    private lateinit var binding: FragmentStartBinding

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
        binding = FragmentStartBinding.inflate(inflater, container, false)
        binding.settingsButton.setOnClickListener {
            Navigation.findNavController(requireActivity(), R.id.fragmentContainerView).navigate(
                StartFragmentDirections.actionStartFragmentToSettingsFragment()
            )
        }

        lifecycleScope.launch {
            myAppViewModel.appState.collect {
                binding.message.text = it.message
            }
        }

        return binding.root
    }

    companion object {

    }
}