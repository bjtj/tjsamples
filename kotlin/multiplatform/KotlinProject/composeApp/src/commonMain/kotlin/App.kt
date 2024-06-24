import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Button
import androidx.compose.material.Divider
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import org.jetbrains.compose.resources.painterResource
import org.jetbrains.compose.ui.tooling.preview.Preview

import kotlinproject.composeapp.generated.resources.Res
import kotlinproject.composeapp.generated.resources.compose_multiplatform
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.forEach
import kotlinx.coroutines.flow.update

@Composable
@Preview
fun App() {
    MaterialTheme {
        var showContent by remember { mutableStateOf(false) }
        val greetings = remember { Greeting().greetList() }

        val greetingsFlow = remember { MutableStateFlow(listOf<String>()) }
        val greetingsFlowList = greetingsFlow.collectAsState(listOf()).value

        LaunchedEffect(Unit) {
            println("LaunchedEffect")
            Greeting().greetFlow().collect { phrase ->
                println("LaunchedEffect - collect: $phrase")
                greetingsFlow.update { list -> list + phrase }
            }
        }

        Column(
            modifier = Modifier.padding(all = 20.dp).padding(top = 40.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            greetings.forEach { greeting ->
                Text("Compose: $greeting")
                Divider()
            }

            greetingsFlowList.forEach { greeting ->
                Text(greeting)
                Divider()
            }
        }

        Column(Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
            Button(onClick = { showContent = !showContent }) {
                Text("Click me!")
            }
            AnimatedVisibility(showContent) {
                val greeting = remember { Greeting().greet() }
                Column(Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
                    Image(painterResource(Res.drawable.compose_multiplatform), null)
                    Text("Compose: $greeting")
                }
            }
        }
    }
}