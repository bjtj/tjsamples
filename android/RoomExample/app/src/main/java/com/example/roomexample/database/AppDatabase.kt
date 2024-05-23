package com.example.roomexample.database

import androidx.room.Database
import androidx.room.RoomDatabase
import androidx.room.migration.Migration
import androidx.sqlite.db.SupportSQLiteDatabase
import com.example.roomexample.data.User
import com.example.roomexample.data.UserDao

@Database(entities = [User::class], version = 2)
abstract class AppDatabase: RoomDatabase() {
    abstract fun userDao(): UserDao

    companion object {
        val MIGRATION_1_2 = object : Migration(1, 2) {
            override fun migrate(database: SupportSQLiteDatabase) {
                database.execSQL("ALTER TABLE User RENAME TO tmp_User")

                database.execSQL("CREATE TABLE `User` (`uid` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, " +
                        "`first_name` TEXT, `last_name` TEXT)")

                database.execSQL("INSERT INTO User (uid, first_name, last_name) " +
                        "SELECT uid, first_name, last_name FROM tmp_User")

                database.execSQL("DROP TABLE tmp_User")
            }
        }

    }
}
