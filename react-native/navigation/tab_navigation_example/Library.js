import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class Library extends Component {
    constructor(props) {
	super(props);
	
    }

    render() {
	return (
	    <SafeAreaView>
	      <View>
		<Text>Library</Text>
	      </View>
	    </SafeAreaView>
	);
    }
}
