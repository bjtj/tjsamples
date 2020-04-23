import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';


export default class History extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <>
	<View style={styles.container}>
	  <Text>History</Text>
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
  }
});
