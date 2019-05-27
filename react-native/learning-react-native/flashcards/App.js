/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, } from 'react-native';

import Flashcards1 from "./src_checkpoint_01/components/Flashcards";
import Flashcards2 from "./src_checkpoint_02/components/Flashcards";
import Flashcards3 from "./src_checkpoint_03/components/Flashcards";
import Flashcards4 from "./src_checkpoint_04/components/Flashcards";

type Props = {};
export default class App extends Component<Props> {
    render() {
	return (
	    // <Flashcards1 />
	    // <Flashcards2 />
	    // <Flashcards3 />
	    <Flashcards4 />
	);
    }
}

const styles = StyleSheet.create({
    
});
