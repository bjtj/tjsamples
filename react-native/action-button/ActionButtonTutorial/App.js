/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Entypo';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
    'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
			  <Text style={styles.welcome}>Welcome to React Native!</Text>
			  <Text style={styles.instructions}>To get started, edit App.js</Text>
			  <Text style={styles.instructions}>{instructions}</Text>
			  <ActionButton
				onPress={() => alert('Right')}
				offsetY={50}>
			  </ActionButton>

			  <ActionButton
				buttonColor='rgba(120, 70, 70, 0.9)'
				position='center'
				renderIcon={() =>(
					<Icon
					  name='suitcase'
					  style={styles.icon} />)}>
				<ActionButton.Item
			buttonColor='rgba(70, 70, 120, 1)'
			title='item'
			onPress={() => alert('pressed')}>
				<Icon name='address' style={styles.icon} />
				</ActionButton.Item>
				</ActionButton>
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
	icon: {
		color: 'white',
		fontSize: 20,
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
