/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [count, setCount] = useState(0);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 32,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 26,
              color: isDarkMode ? 'white' : 'black',
            }}>
            Counter
          </Text>
          <Text
            style={{
              margin: 8,
              fontSize: 16,
              color: isDarkMode ? 'white' : 'black',
            }}>
            Count: {count}
          </Text>
          <Button
            title="Increment"
            onPress={() => {
              setCount(count + 1);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
