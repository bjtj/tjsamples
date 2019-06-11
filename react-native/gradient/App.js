import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

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

			  <LinearGradient
				colors={['#4c669f', '#3b5998', '#192f6a']}
				style={styles.linearGradient}>
				<Text
				  style={styles.buttonText}>
				  Sign in with Facebook
				</Text>
			  </LinearGradient>
			  
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
	linearGradient: {
		marginTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5
	},
	buttonText: {
		fontSize: 18,
		fontFamily: 'Gill Sans',
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
		backgroundColor: 'transparent',
	},
});
