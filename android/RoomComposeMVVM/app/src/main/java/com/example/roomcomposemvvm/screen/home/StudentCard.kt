package com.example.roomcomposemvvm.screen.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.material3.Checkbox
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.roomcomposemvvm.entities.StudentEntity
import javax.annotation.concurrent.Immutable

@Immutable
data class ImmutableStudent(val studentEntity: StudentEntity)

@Composable
fun StudentCard(
    wrapper: ImmutableStudent,
    homeViewModel: HomeViewModel,
    mod: Modifier,
) {
    val onCheckedChange: (value: StudentEntity) -> Unit = remember {
        return@remember homeViewModel::updateStudent
    }
    Card(
        onClick = {

        }, modifier = mod
    ) {
        Row(
            modifier = Modifier.fillMaxSize(),
            verticalAlignment = Alignment.CenterVertically
        )
        {
            Column(
                modifier = Modifier
                    .padding(start = 10.dp)
                    .weight(3f)
                    .fillMaxHeight(),
                verticalArrangement = Arrangement.Center
            ) {
                Text(
                    text = wrapper.studentEntity.name,
                    maxLines = 1,
                    fontWeight = FontWeight.Bold,
                    style = MaterialTheme.typography.bodyLarge
                )
                Spacer(modifier = Modifier.height(5.dp))
                Text(
                    text = wrapper.studentEntity.studentRollNo,
                    maxLines = 1,
                    fontWeight = FontWeight.Normal,
                    style = MaterialTheme.typography.bodySmall
                )
            }

            Box(modifier = Modifier.weight(1f), contentAlignment = Alignment.Center) {
                Checkbox(checked = wrapper.studentEntity.passOrFail, onCheckedChange = {
                    onCheckedChange(
                        StudentEntity(
                            wrapper.studentEntity.id,
                            wrapper.studentEntity.name,
                            wrapper.studentEntity.studentRollNo,
                            it
                        )
                    )
                })
            }
        }
    }
}
