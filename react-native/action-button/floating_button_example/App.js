/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { FloatingAction } from "react-native-floating-action";

const actions = [
  {
    text: "Accessibility",
    icon: require("./images/ic_accessibility_white.png"),
    name: "bt_accessibility",
    position: 2
  },
  {
    text: "Language",
    icon: require("./images/ic_language_white.png"),
    name: "bt_language",
    position: 1
  },
  {
    text: "Location",
    icon: require("./images/ic_room_white.png"),
    name: "bt_room",
    position: 3
  },
  {
    text: "Video",
    icon: require("./images/ic_videocam_white.png"),
    name: "bt_videocam",
    position: 4
  }
];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
      <View style={styles.body}>
      <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Step One</Text>
      <Text style={styles.sectionDescription}>
      Edit <Text style={styles.highlight}>App.js</Text> to change this
    screen and then come back to see your edits.
      </Text>
      </View>
      <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>See Your Changes</Text>
      <Text style={styles.sectionDescription}>
      <ReloadInstructions />
      </Text>
      </View>
      <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Debug</Text>
      <Text style={styles.sectionDescription}>
      <DebugInstructions />
      </Text>
      </View>
      <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Learn More</Text>
      <Text style={styles.sectionDescription}>
      Read the docs to discover what to do next:
    </Text>
      </View>
      <LearnMoreLinks />
      </View>
      </ScrollView>
      <FloatingAction
    actions={actions}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
      />
      </SafeAreaView>
      </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
