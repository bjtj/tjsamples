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

const App: () => React$Node = () => {

  const [pick, setPick] = useState(0);

  const views = [
    <StackSample />,
    <TabSample />,
    <CustomTabSample />,
    <DrawerSample />,
    <SafeAreaSample />,
  ];
  
  return (
    <>
      {
        views[pick]
      }
      <View style={styles.float}>
        <Button title='Stack' onPress={() => {setPick(0)}}/>
        <Button title='Tab' onPress={() => {setPick(1)}}/>
        <Button title='Custom Tab' onPress={() => {setPick(2)}}/>
        <Button title='Drawer' onPress={() => {setPick(3)}}/>
        <Button title='Safe Area' onPress={() => {setPick(4)}}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safe: {
    ...StyleSheet.fillAbsoluteObject,
  },
  float: {
    position: 'absolute',
    top: 50,
    right: 30,
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default App;
