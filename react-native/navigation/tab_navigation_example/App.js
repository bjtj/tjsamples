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
import { createStackNavigator } from 'react-navigation-stack';

import Album from './Album';
import Library from './Library';
import History from './History';
import Cart from './Cart';

import CustomNavigator from './CustomNavigator';

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

const OtherScreen = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text>Other</Text>
    </View>
  );
}

const StackNav = createStackNavigator(
  {
    Home: TabNav,
    CustomNavigator: CustomNavigator,
    Other: OtherScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(StackNav);


export default class App extends Component {
    constructor(props) {
	super(props);
    }

    render() {
	return <AppContainer />
    }
}

