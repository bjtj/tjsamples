import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MaskedView from '@react-native-community/masked-view';


type Props = {};
export default class App extends Component<Props> {
    render() {
	return (
	    <MaskedView
              style={{flex: 1, flexDirection: 'row', height: '100%', transform: [{rotate: '1rad'}]}}
              maskElement={
		      <View
			    style={{
				// Transparent background because mask is based off alpha channel.
				backgroundColor: 'transparent',
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			    }}>
			    <Text
				  style={{
				      fontSize: 60,
				      color: 'black',
				      fontWeight: 'bold',
				  }}>
				  Basic Mask
				</Text>
			  </View>
		      }>
              {/* Shows behind the mask, you can put anything here, such as an image */}
              <View style={{flex: 1, height: '100%', backgroundColor: '#324376'}} />
              <View style={{flex: 1, height: '100%', backgroundColor: '#F5DD90'}} />
              <View style={{flex: 1, height: '100%', backgroundColor: '#F76C5E'}} />
              <View style={{flex: 1, height: '100%', backgroundColor: '#e1e1e1'}} />
	    </MaskedView>
	);
    }
}

const styles = StyleSheet.create({

});
