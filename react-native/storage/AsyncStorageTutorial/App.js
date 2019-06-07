import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
	super(props);
	this.state = {
	    value: null,
	};
    }

    storeData = async () => {
	try {
	    await AsyncStorage.setItem('@storage_Key', 'stored value');
	    console.log('done: store data');
	} catch (e) {
	    // saving error
	    console.error(`failed store data ${e}`);
	}
    }

    getData = async () => {
	try {
	    const value = await AsyncStorage.getItem('@storage_Key');
	    if(value !== null) {
		// value previously stored
		console.log(`previous value: ${value}`);
	    }
	    this.setState({
		value: value,
	    });
	} catch(e) {
	    // error reading value
	    console.error(`failed read data ${e}`);
	}
    }

    removeData = async () => {
	try {
	    await AsyncStorage.removeItem('@storage_Key');
	} catch (err) {
	    console.error(`failed remove data ${e}`);	    
	}
    }
    
    render() {
	return (
	    <View style={styles.container}>
	      <Text style={styles.instructions}>Value: {this.state.value}</Text>
              <Button title="store data" onPress={() => this.storeData()}></Button>
	      <Button title="get data" onPress={() => this.getData()}></Button>
	      <Button title="remove data" onPress={() => this.removeData()}></Button>
	    </View>
	);
    }
}

const styles = StyleSheet.create({
    container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
    },
    welcome: {
	fontSize: 20,
	textAlign: 'center',
	margin: 10,
    },
    instructions: {
	textAlign: 'center',
	color: '#333333',
	marginBottom: 5,
    },
});
