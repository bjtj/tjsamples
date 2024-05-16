package com.example.navigationexample.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.navArgs
import com.example.navigationexample.databinding.FragmentContentBinding

class ContentFragment : Fragment() {
    private lateinit var binding: FragmentContentBinding

    private val args: ContentFragmentArgs by navArgs()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentContentBinding.inflate(inflater, container, false)
        binding.message.text = "Content: ${args.content}"
        return binding.root
    }

    companion object {
    }
}
