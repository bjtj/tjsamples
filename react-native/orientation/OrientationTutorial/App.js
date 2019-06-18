import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import Orientation from 'react-native-orientation';

type Props = {};
export default class App extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
			log: '',
		};
	}

	_pad(x, n=2) {
		return x.toString().padStart(n, 0)
	}

	_formatDate() {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		const milliseconds = date.getMilliseconds().toFixed(3);
		return `${year}-${this._pad(month)}-${this._pad(day)} ${this._pad(hours)}:${this._pad(minutes)}:${this._pad(seconds)}`
	}

	_log(txt) {
		this.setState({
			log: `[${this._formatDate()}] ${txt}\n${this.state.log}`,
		});
	}

	componentWillMount() {
		// The getOrientation method is async. It happens sometimes that
		// you need the orientation at the moment the JS runtime starts running on device.
		// `getInitialOrientation` returns directly because its a constant set at the
		// beginning of the JS runtime.

		const initial = Orientation.getInitialOrientation();
		if (initial === 'PORTRAIT') {
			// do something
			this._log('componentWillMount -- portrait');
		} else {
			// do something else
			this._log('componentWillMount -- landscape');
		}
	}

	componentDidMount() {
		// this locks the view to Portrait Mode
		// Orientation.lockToPortrait();

		// this locks the view to Landscape Mode
		// Orientation.lockToLandscape();

		// this unlocks any previous locks to all Orientations
		// Orientation.unlockAllOrientations();

		Orientation.addOrientationListener(this._orientationDidChange);
	}

	_orientationDidChange = (orientation) => {
		if (orientation === 'LANDSCAPE') {
			// do something with landscape layout
			this._log('orientationDidchange -- landscape');
		} else {
			// do something with portrait layout
			this._log('orientationDidchange -- portrait');
		}
	}

	componentWillUnmount() {
		Orientation.getOrientation((err, orientation) => {
			console.log(`Current Device Orientation: ${orientation}`);
			this._log(`componentWillUnmount -- ${orientation}`);
		});


		// Remember to remove listener
		Orientation.removeOrientationListener(this._orientationDidChange);
	}
	
	render() {
		return (
			<View style={styles.container}>
			  <ScrollView>
				<Text style={styles.text}>{this.state.log}</Text>
			</ScrollView>
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
		paddingTop: 50,
		paddingBottom: 30,
		paddingHorizontal: 10,
	},
	text: {
		color: 'black',
		fontSize: 12,
	},
});
