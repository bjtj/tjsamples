import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TodoList from './TodoList';
import NewItem from './NewItem';
import ListStore from './stores/listStore';


const AppNavigator = createStackNavigator(
    {
	Home: { screen: TodoList, params: {store: ListStore } },
	NewItem: { screen: NewItem, params: {store: ListStore } },
    },
    {
	initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
	return <AppContainer />;
    }
}
