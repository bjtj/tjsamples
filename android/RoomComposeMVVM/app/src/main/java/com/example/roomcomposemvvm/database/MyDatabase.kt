package com.example.roomcomposemvvm.database

import androidx.room.Database
import androidx.room.RoomDatabase
import com.example.roomcomposemvvm.dao.MyDao
import com.example.roomcomposemvvm.entities.StudentEntity

@Database(
    entities = [StudentEntity::class],
    version = 1
)
abstract class MyDatabase: RoomDatabase() {
    abstract val dao: MyDao
}
