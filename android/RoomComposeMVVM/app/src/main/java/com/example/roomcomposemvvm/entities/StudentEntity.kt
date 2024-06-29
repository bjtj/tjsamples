package com.example.roomcomposemvvm.entities

import androidx.room.Entity
import androidx.room.PrimaryKey
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
@Entity(tableName = tableName)
data class StudentEntity(
    @PrimaryKey(autoGenerate = true)
    @SerialName("id")
    val id: Int = 0,

    @SerialName("name")
    val name: String = "",

    @SerialName("studentRollNo")
    val studentRollNo: String = "",

    @SerialName("passOrFail")
    val passOrFail: Boolean = true,
)

const val tableName = "StudentEntity"
