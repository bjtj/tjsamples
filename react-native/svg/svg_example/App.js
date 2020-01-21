import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import Sample1 from './Sample1';
import Sample2 from './Sample2';

const App: () => React$Node = () => {
    return (
	<>
	  <StatusBar barStyle="dark-content" />
	  <SafeAreaView style={styles.safe}>
	    <Sample1 />
	    <Sample2 />
	  </SafeAreaView>
	</>
    );
};

const styles = StyleSheet.create({
    safe: {
	...StyleSheet.fillAbsoluteObject,
	flex: 1,
	backgroundColor: 'silver',
	
    },
});

export default App;
