package com.example.roomcomposemvvm.screen.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Checkbox
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.example.roomcomposemvvm.entities.StudentEntity

@Composable
fun HomeScreen(modifier: Modifier = Modifier) {
    val viewModel = hiltViewModel<HomeViewModel>()
    Column(modifier = modifier) {
        Content(homeViewModel = viewModel)
    }

}

@Composable
fun Content(
    homeViewModel: HomeViewModel,
) {

    LaunchedEffect(key1 = true, block = {
        // we will get the student details when ever the screen is created
        // Launched effect is a side effect
        homeViewModel.getStudentDetails()
    })

    Column(
        modifier = Modifier
            .fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .fillMaxHeight(0.5f), contentAlignment = Alignment.TopCenter
        ) {
            TopContent(homeViewModel = homeViewModel)
        }
        Text(
            text = "Students List",
            modifier = Modifier.fillMaxWidth(),
            textAlign = TextAlign.Center,
            fontWeight = FontWeight.Bold
        )

        BottomContent(homeViewModel = homeViewModel)
    }
}

@Composable
fun TopContent(homeViewModel: HomeViewModel) {
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        val name by homeViewModel.studentName.collectAsStateWithLifecycle()
        val studentRoll by homeViewModel.studentRollNo.collectAsStateWithLifecycle()
        val checked by homeViewModel.isChecked.collectAsStateWithLifecycle()
        val onNameEntered: (value: String) -> Unit = remember {
            return@remember homeViewModel::setStudentName
        }
        val onRollNoEntered: (value: String) -> Unit = remember {
            return@remember homeViewModel::setStudentRollNo
        }
        val onCheck: (value: Boolean) -> Unit = remember {
            return@remember homeViewModel::setChecked
        }
        val onSubmit: (value: StudentEntity) -> Unit = remember {
            return@remember homeViewModel::insertStudent
        }
        OutlinedTextField(
            value = name,
            onValueChange = {
                onNameEntered(it)
            },
            placeholder = {
                Text(text = "Enter the Name of Student")
            },
            keyboardOptions = KeyboardOptions(imeAction = ImeAction.Next),
            keyboardActions = KeyboardActions(), maxLines = 1
        )
        Spacer(modifier = Modifier.height(15.dp))
        OutlinedTextField(
            value = studentRoll, onValueChange = {
                onRollNoEntered(it)
            },
            placeholder = {
                Text(text = "Enter the Name of Student")
            },
            keyboardOptions = KeyboardOptions(imeAction = ImeAction.Done),
            keyboardActions = KeyboardActions(),
            maxLines = 1
        )
        Spacer(modifier = Modifier.height(15.dp))

        Checkbox(checked = checked, onCheckedChange = {
            onCheck(it)
        })
        Spacer(modifier = Modifier.height(10.dp))
        OutlinedButton(onClick = {
            onSubmit(
                StudentEntity(
                    name = name,
                    studentRollNo = studentRoll,
                    passOrFail = checked
                )
            )
        }) {
            Text(text = "Submit")
        }

    }
}

@Composable
fun BottomContent(homeViewModel: HomeViewModel) {
    val contents by homeViewModel.studentDetailsList.collectAsStateWithLifecycle()

    val mod = Modifier
        .padding(15.dp)
        .fillMaxWidth()
        .height(80.dp)


    LazyColumn(content = {

        items(contents) {
            val item = ImmutableStudent(it)
            StudentCard(wrapper = item, homeViewModel = homeViewModel, mod = mod)
        }
    }, modifier = Modifier.fillMaxSize()
    )
}
