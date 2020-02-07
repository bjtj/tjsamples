import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TodoList from './TodoList';
import NewItem from './NewItem';
import ListStore from './stores/listStore';
import { Provider } from 'mobx-react';

const store = new ListStore();

const AppNavigator = createStackNavigator(
  {
    Home: { screen: TodoList, },
    NewItem: { screen: NewItem,  },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
	<AppContainer />
      </Provider>
    )
  }
}
