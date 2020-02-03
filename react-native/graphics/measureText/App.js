/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import rnTextSize, { TSFontSpecs } from 'react-native-text-size';


const App: () => React$Node = () => {

  const [pos, setPos] = useState([0, 0]);

  const fontSpecs = {
    fontFamily: undefined,
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
  const text = 'I ❤️ rnTextSize'

  const width = Dimensions.get('window').width

  rnTextSize.measure({
    text,             // text to measure, can include symbols
    width,            // max-width of the "virtual" container
    ...fontSpecs,     // RN font specification
  }).then((size) => {
    console.log(size);
    setPos([size.width, size.height])
  })
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
	  style={styles.scrollView}>
	  <View>
	    <Text style={styles.text}>{text}</Text>
	  </View>
	  <View style={{width: pos[0], height: 10, backgroundColor: 'red'}}>
	  </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
  },
  text: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
});

export default App;
