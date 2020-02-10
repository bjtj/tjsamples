// https://reactnavigation.org/docs/en/material-top-tab-navigator.html#tabbar

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

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

function TabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
	const { options } = descriptors[route.key];
	const label =
	      options.tabBarLabel !== undefined
	      ? options.tabBarLabel
	      : options.title !== undefined
	      ? options.title
	      : route.name;
	const isFocused = state.index === index;

	const onPress = () => {
	  const event = navigation.emit({
	    type: 'tabPress',
	    target: route.key,
	  });

	  if (!isFocused && !event.defaultPrevented) {
	    navigation.navigate(route.name);
	  }
	};

	const onLongPress = () => {
	  navigation.emit({
	    type: 'tabLongPress',
	    target: route.key,
	  });
	};

	const inputRange = state.routes.map((_, i) => i);
	const opacity = Animated.interpolate(position, {
	  inputRange,
	  outputRange: inputRange.map(i => (i === index ? 1 : 0.3)),
	});

	return (
	  <TouchableOpacity
	    key={index}
	    accessibilityRole="button"
	    accessibilityStates={isFocused ? ['selected'] : []}
	    accessibilityLabel={options.tabBarAccessibilityLabel}
	    testID={options.tabBarTestID}
	    onPress={onPress}
	    onLongPress={onLongPress}
	    style={{ padding: 10, borderBottomWidth: isFocused ? 3 : 0 }}>
	    <Animated.Text
	      style={{ opacity, fontSize: 16, textAlign: 'center' }}>
	      {label}
	    </Animated.Text>
	  </TouchableOpacity>
	);
      })}
    </View>
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
	    <Tab.Navigator
	      swipeEnabled={swipeEnabled}
	      tabBar={props => <TabBar {...props} />}>
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default TopBarSample;
