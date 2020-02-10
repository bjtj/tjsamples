import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView, useSafeArea } from 'react-native-safe-area-context';

function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
	<Text>Home</Text>
      </View>
    </>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
	<Text>Settings</Text>
      </View>
    </>
  );
}

const Tab = createMaterialTopTabNavigator();

export const TopBarSample = () => {

  const swipeEnabled = true;

  return (
    <>
      <SafeAreaProvider>	
	<NavigationContainer>
	  <SafeAreaView style={styles.safe}>
	    <Tab.Navigator swipeEnabled={swipeEnabled}>
	      <Tab.Screen name="Home" component={HomeScreen} />
	      <Tab.Screen name="Settings" component={SettingsScreen} />
	    </Tab.Navigator>
	  </SafeAreaView>
	</NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
  safe: {
    ...StyleSheet.fillAbsoluteObject,
    flex: 1,
  },
  container: {
  },
});

export default TopBarSample;
