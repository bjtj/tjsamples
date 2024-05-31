package com.example.livedataexample

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class FavoritesViewModel : ViewModel() {

    private val _favorites = mutableListOf<Favorite>()
    val favorites = MutableLiveData<List<Favorite>>()

    init {
        _favorites.add(Favorite(Favorite.nextId(), "Favorite 1", System.currentTimeMillis()))
        _favorites.add(Favorite(Favorite.nextId(), "Favorite 2", System.currentTimeMillis()))
        _favorites.add(Favorite(Favorite.nextId(), "Favorite 3", System.currentTimeMillis()))
        _favorites.add(Favorite(Favorite.nextId(), "Favorite 4", System.currentTimeMillis()))

        favorites.value = _favorites
    }

    fun addFavorite(favorite: Favorite) {
        _favorites.add(favorite)
        this.favorites.value = _favorites
    }

    fun removeFavorite(favorite: Favorite) {
        _favorites.remove(favorite)
        this.favorites.value = _favorites
    }

}