import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Album extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <>
	<View style={styles.container}>
	  <Text>Album</Text>
	  
	  <TouchableOpacity
	    style={styles.button}
	    onPress={() => {this.props.navigation.navigate('Other')}}>
	    <Text>Other</Text>
	  </TouchableOpacity>
	  
	  <TouchableOpacity
	    style={styles.button}
	    onPress={() => {this.props.navigation.navigate('CustomNavigator')}}>
	    <Text>Custom Navigator</Text>
	  </TouchableOpacity>
	</View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    backgroundColor: 'silver',
    borderRadius: 8,
    margin: 7,
  }
});
