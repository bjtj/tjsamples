package com.example.navigationexample.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.navigation.Navigation
import com.example.navigationexample.R

class StartFragment : Fragment() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        Navigation.findNavController(requireActivity(), R.id.fragmentContainerView)
            .navigate(StartFragmentDirections.actionStartToMenu())
        return super.onCreateView(inflater, container, savedInstanceState)
    }

    companion object {
    }
}
