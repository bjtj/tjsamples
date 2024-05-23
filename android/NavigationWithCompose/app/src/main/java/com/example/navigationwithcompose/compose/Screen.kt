package com.example.navigationwithcompose.compose

import androidx.navigation.NamedNavArgument
import androidx.navigation.NavType
import androidx.navigation.navArgument

sealed class Screen(val route: String, val navArguments: List<NamedNavArgument> = emptyList()) {

    data object Home : Screen("home")

    data object Detail :
        Screen(
            route = "detail/{itemId}",
            navArguments = listOf(navArgument("itemId") { type = NavType.StringType })
        ) {
            fun createRoute(itemId: String) = "detail/$itemId"
        }
}
