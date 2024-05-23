package com.example.navigationwithcompose

import android.annotation.SuppressLint
import android.app.Activity
import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.animation.EnterTransition
import androidx.compose.animation.ExitTransition
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.tooling.preview.Preview
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.navigationwithcompose.compose.Screen
import com.example.navigationwithcompose.compose.detail.DetailScreen
import com.example.navigationwithcompose.compose.home.HomeScreen
import com.example.navigationwithcompose.data.Item
import com.example.navigationwithcompose.ui.theme.NavigationWithComposeTheme

private const val TAG = "MainActivity"

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            NavigationWithComposeTheme {
                App()
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun App() {
    val navController = rememberNavController()
    AppNavHost(
        navController = navController,
    )
}

@Composable
fun AppNavHost(navController: NavHostController) {
    val activity = (LocalContext.current as Activity)
    NavHost(
        navController = navController,
        startDestination = Screen.Home.route,
        enterTransition = {
            EnterTransition.None
        },
        exitTransition = {
            ExitTransition.None
        }
    ) {

        val items = listOf(
            Item("1", "Item 1", "Description 1"),
            Item("2", "Item 2", "Description 2"),
            Item("3", "Item 3", "Description 3"),
            Item("4", "Item 4", "Description 4"),
            Item("5", "Item 5", "Description 5"),
        )

        composable(route = Screen.Home.route) {
            HomeScreen(
                items = items,
                onItemClick = {
                    Toast.makeText(activity, "Item ${it.id} clicked", Toast.LENGTH_SHORT).show()
                    navController.navigate(Screen.Detail.createRoute(it.id))
                }
            )
        }
        composable(
            route = Screen.Detail.route,
            arguments = Screen.Detail.navArguments
        ) {
            val itemId = it.arguments?.getString("itemId").orEmpty()
            val item = items.find { it.id == itemId }
            DetailScreen(
                onBackClick = { navController.navigateUp() },
                item = item,
            )
        }
    }


}


@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    NavigationWithComposeTheme {
        App()
    }
}