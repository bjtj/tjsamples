// https://reactnavigation.org/docs/en/drawer-based-navigation.html

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, } from 'react-native';
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer
} from "react-navigation";
import Icon from 'react-native-vector-icons/Entypo'


class MyHomeScreen extends React.Component {
    static navigationOptions = {
	drawerLabel: 'Home',
	drawerIcon: ({ tintColor }) => (
	    <Icon
	      name='chat'
	      size={24}
	      style={{color: tintColor}}>
	    </Icon>
	),
    };

    render() {
	return (
	    <Button
              onPress={() => this.props.navigation.navigate('Notifications')}
              title="Go to notifications"
	      />
	);
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
	drawerLabel: 'Notifications',
	drawerIcon: ({ tintColor }) => (
	    <Icon
	      name='notification'
	      size={24}
	      style={{color: tintColor}}>
	    </Icon>
	),
    };

    render() {
	return (
	    <Button
              onPress={() => this.props.navigation.goBack()}
              title="Go back home"
	      />
	);
    }
}

const styles = StyleSheet.create({
    icon: {
	width: 24,
	height: 24,
    },
});

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
	screen: MyHomeScreen,
    },
    Notifications: {
	screen: MyNotificationsScreen,
    },
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default class DrawerExample extends Component {
    render() {
	return (
	    <MyApp />
	);
    }
}
