import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Text>Home Screen</Text>
	<Button
	  title="Go to Details"
	  onPress={() => this.props.navigation.navigate('Details', {
	    itemId: 86,
	    otherParam: 'anything you want here',
	  })}
	  ></Button>
      </View>
    );
  }
}

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };

  
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	<Text>Details Screen</Text>
	<Text>itemId: {JSON.stringify(itemId)}</Text>
	<Text>otherParam: {JSON.stringify(otherParam)}</Text>
	<Button
	  title="Go to Details... agin"
	  onPress={() => this.props.navigation.push('Details', {
	    itemId: Math.floor(Math.random() * 100),
	  })}
	  ></Button>
	<Button
	  title="Go to Home"
	  onPress={() => this.props.navigation.navigate('Home')}
	  ></Button>
	<Button
	  title="Go back"
	  onPress={() => this.props.navigation.goBack()}
	  ></Button>
      </View>
    );
  }
}

const LogoTitle = () => {
  return (<Text>Logo Title</Text>);
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle: () => <LogoTitle />,
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
