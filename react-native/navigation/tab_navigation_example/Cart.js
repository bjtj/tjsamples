import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class Cart extends Component {
    constructor(props) {
	super(props);
	
    }

    render() {
	return (
	    <SafeAreaView>
	      <View>
		<Text>Cart</Text>
	      </View>
	    </SafeAreaView>
	);
    }
}
