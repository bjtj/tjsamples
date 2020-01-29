import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class Album extends Component {
    constructor(props) {
	super(props);
	
    }

    render() {
	return (
	    <SafeAreaView>
	      <View>
		<Text>Album</Text>
	      </View>
	    </SafeAreaView>
	);
    }
}
