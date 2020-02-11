import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import StackSample from './StackSample';
import TabSample from './TabSample';
import CustomTabSample from './CustomTabSample';
import DrawerSample from './DrawerSample';
import SafeAreaSample from './SafeAreaSample';
import TopBarSample from './TopBarSample';
import CustomTopBarSample from './CustomTopBarSample';

const App: () => React$Node = () => {

  const [pick, setPick] = useState(0);

  const views = [
    {name: 'Stack', screen: (<StackSample />)},
    {name: 'Tab', screen: (<TabSample />)},
    {name: 'Custom Tab', screen: (<CustomTabSample />)},
    {name: 'Drawer', screen: (<DrawerSample />)},
    {name: 'Safe Area', screen: (<SafeAreaSample />)},
    {name: 'Top Bar', screen: (<TopBarSample />)},
    {name: 'Custom Top Bar', screen: (<CustomTopBarSample />)},
  ];
  
  return (
    <>
      {
        views[pick].screen
      }
      <View style={styles.float}>
	{
	  views.map((item, index) => (
	    <Button key={index} title={item.name} onPress={() => {setPick(index)}}></Button>
	  ))
	}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safe: {
    ...StyleSheet.fillAbsoluteObject,
  },
  float: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 80,
    right: 30,
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default App;
