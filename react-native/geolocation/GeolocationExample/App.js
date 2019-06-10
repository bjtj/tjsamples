import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

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
			geoinfo: null,
		};
	}

	componentDidMount() {
		Geolocation.getCurrentPosition(info => {
			this.setState({
				geoinfo: info
			});
			console.log(info);
		});
	}
	
	render() {
		const info = this.state.geoinfo;
		return (
			<View style={styles.container}>
			  <Text style={styles.welcome}>Welcome to React Native!</Text>
			  <Text style={styles.instructions}>
				{info ? `Location: ${info.coords.latitude.toFixed(3)}/${info.coords.longitude.toFixed(3)}` : '...'}
			  </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	welcome: {
		color: 'black',
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		color: 'black',
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
