import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';


import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Album from './Album';
import Library from './Library';
import History from './History';
import Cart from './Cart';

import Logo from './Logo';
const Icon = require('./icon.png');


const TabNav = createBottomTabNavigator(
    {
	Album: { screen: Album },
	Library: { screen: Library },
	History: { screen: History },
	Cart: { screen: Cart },
    },
    {
	defaultNavigationOptions: ({ navigation }) => ({
	    // tabBarIcon: <Image source={Icon}/>
	    tabBarIcon: <Logo width={20} height={20}/>
	})
    }
);

const AppContainer = createAppContainer(TabNav);


export default class App extends Component {
    constructor(props) {
	super(props);
    }

    render() {
	return <AppContainer />
    }
}

const styles = StyleSheet.create({

});

