package com.example.roomcomposemvvm.repository

import com.example.roomcomposemvvm.entities.StudentEntity
import kotlinx.coroutines.flow.Flow

interface Repository {

    suspend fun insert(studentEntity: StudentEntity)

    suspend fun delete(studentEntity: StudentEntity)

    suspend fun update(studentEntity: StudentEntity)

    suspend fun getAllStudents(): Flow<List<StudentEntity>>
}
