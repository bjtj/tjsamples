/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
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

import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";


const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    en: () => require("./translations/en.json"),
    ko: () => require("./translations/ko.json"),
};

const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = () => {

    console.log('setI18nConfig');
    
    const fallback = { languageTag: "en", isRTL: false };

    const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
	  fallback;

    translate.cache.clear();
    i18n.translations = { [languageTag]: translationGetters[languageTag]() };
    i18n.locale = languageTag;
};

export default class App extends Component {
    constructor(props) {
	super(props);
	setI18nConfig();
    }

    componentDidMount() {
	RNLocalize.addEventListener("change", this.handleLocalizationChange);
    }

    componentWillUnmount() {
	RNLocalize.removeEventListener("change", this.handleLocalizationChange);
    }

    handleLocalizationChange = () => {
	console.log('handleLocalizationChange');
	setI18nConfig();
	this.forceUpdate();
    }
    
    render() {
	return (
	    <SafeAreaView style={styles.safeArea}>
              <ScrollView contentContainerStyle={styles.container}>
		<Line
		  name="RNLocalize.getLocales()"
		  value={RNLocalize.getLocales()}
		  />

		{Platform.OS === "android" && (
		    <>
		      <Line
			name="RNLocalize.usesAutoDateAndTime()"
			value={RNLocalize.usesAutoDateAndTime()}
			/>
		      <Line
			name="RNLocalize.usesAutoTimeZone()"
			value={RNLocalize.usesAutoTimeZone()}
			/>
		    </>
		)}
		<Line name="Translation example" value={translate("hello")} />
		</ScrollView>
		</SafeAreaView>
	);
    }
}

const Line = props => (
    <View style={styles.block}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.value}>{JSON.stringify(props.value, null, 2)}</Text>
    </View>
);

const styles = StyleSheet.create({
    safeArea: {
	backgroundColor: "white",
	flex: 1,
    },
    container: {
	padding: 16,
	alignItems: "flex-start",
    },
    block: {
	marginBottom: 16,
	alignItems: "flex-start",
    },
    name: {
	textDecorationLine: "underline",
	fontWeight: "500",
	marginBottom: 8,
	fontSize: 16,
    },
    value: {
	textAlign: "left",
    },
});

