import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';


type Props = {};
export default class App extends Component<Props> {
    render() {
		return (
			<SafeAreaView
			  style={{
				  flex: 1,
			  }}>
			  <View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<MapView
				  provider={PROVIDER_GOOGLE}
				  style={{
					  flex: 1,
					  width: '100%',
				  }}
				  initialRegion={{
					  latitude: 37.78825,
					  longitude: -122.4324,
					  latitudeDelta: 0.0922,
					  longitudeDelta: 0.0421,
				  }} />
			  </View>
			</SafeAreaView>
		);
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
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
