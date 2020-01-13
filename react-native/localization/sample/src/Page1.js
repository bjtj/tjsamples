import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import * as RNLocalize from "react-native-localize";

console.log(RNLocalize.getLocales());
console.log(RNLocalize.getCurrencies());

RNLocalize.addEventListener("change", () => {
  // do localization related stuff…
});

console.log(RNLocalize.getLocales());

const Page1: () => React$Node = () => {
    return (
	<>
	  <StatusBar barStyle="dark-content" />
	  <SafeAreaView>
            <Text>{ `${JSON.stringify(RNLocalize.getLocales())}` }</Text>
	  </SafeAreaView>
	</>
    );
};

const styles = StyleSheet.create({
});

export default Page1;
