package com.example.roomcomposemvvm

import android.app.Application
import androidx.room.Room
import com.example.roomcomposemvvm.database.MyDatabase
import com.example.roomcomposemvvm.repository.Repository
import com.example.roomcomposemvvm.repository.RepositoryImpl
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@InstallIn(SingletonComponent::class)
@Module
object AppModule {
    @Provides
    @Singleton
    fun provideMyDataBase(app: Application): MyDatabase {
        return Room.databaseBuilder(
            app,
            MyDatabase::class.java,
            "MyDataBase"
        )
//            .addMigrations() later add migrations if u change the table
            .build()
    }

    @Provides
    @Singleton
    fun provideMyRepository(mydb: MyDatabase): Repository {
        return RepositoryImpl(mydb.dao)
    }
}
