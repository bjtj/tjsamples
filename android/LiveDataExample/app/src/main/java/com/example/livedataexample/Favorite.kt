package com.example.livedataexample

data class Favorite(val id: Long, val name: String, val date: Long) {
    companion object {
        private var _id_seed = 0L
        fun nextId(): Long {
            return _id_seed++
        }
    }
}
