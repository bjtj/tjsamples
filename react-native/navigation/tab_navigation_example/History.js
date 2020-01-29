import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class History extends Component {
    constructor(props) {
	super(props);
	
    }

    render() {
	return (
	    <SafeAreaView>
	      <View>
		<Text>History</Text>
	      </View>
	    </SafeAreaView>
	);
    }
}
