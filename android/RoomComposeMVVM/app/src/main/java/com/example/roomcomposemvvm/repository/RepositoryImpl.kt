package com.example.roomcomposemvvm.repository

import com.example.roomcomposemvvm.dao.MyDao
import com.example.roomcomposemvvm.entities.StudentEntity
import kotlinx.coroutines.Dispatchers.IO
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.withContext
import javax.inject.Inject

class RepositoryImpl @Inject constructor(
    private val dao: MyDao,
) : Repository {
    override suspend fun insert(studentEntity: StudentEntity) {
        withContext(IO) {
            dao.insert(studentEntity)
        }
    }

    override suspend fun delete(studentEntity: StudentEntity) {
        withContext(IO) {
            dao.delete(studentEntity)
        }
    }

    override suspend fun update(studentEntity: StudentEntity) {
        withContext(IO) {
            dao.update(studentEntity)
        }
    }

    override suspend fun getAllStudents(): Flow<List<StudentEntity>> {
        return withContext(IO) {
            dao.getAllStudents()
        }
    }

}
