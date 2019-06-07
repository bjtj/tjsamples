/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

import SideMenu from 'react-native-side-menu';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const image = require('./assets/menu.png');

class Menu extends Component {
    constructor(props) {
	super(props);
    }

    render() {
	return (
	    <ScrollView scrollsToTop={false} style={styles.menu}>
	      <View style={styles.avatarContainer}>
		<Image
		  style={styles.avatar}
		  source={{ uri }}
		  />
		<Text style={styles.name}>Your name</Text>
	      </View>

	      <Text
		onPress={() => this.props.onItemSelected('About')}
		style={styles.item}
		>
		About
	      </Text>

	      <Text
		onPress={() => this.props.onItemSelected('Contacts')}
		style={styles.item}
		>
		Contacts
	      </Text>
	    </ScrollView>
	);
    }
}

class ContentView extends Component {
    render() {
	return (
	    <View style={styles.container}>
              <Text style={styles.welcome}>
		Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
		To get started, edit index.ios.js
              </Text>
              <Text style={styles.instructions}>
		Press Cmd+R to reload,{'\n'}
		Cmd+Control+Z for dev menu
              </Text>
	    </View>
	);
    }
}

type Props = {};
export default class App extends Component<Props> {
    
    constructor(props) {
	super(props);
	this.state = {
	    isOpen: false,
	    selectedItem: 'About',
	};
    }
    
    render() {
	const menu = <Menu onItemSelected={this.onMenuItemSelected.bind(this)} />;
	return (
	    <SideMenu
	      menu={menu}
	      isOpen={this.state.isOpen}
	      onChange={isOpen => this.updateMenuState(isOpen)}>
	      <ContentView />
	      <TouchableOpacity
		onPress={this.toggle.bind(this)}
		style={styles.button}
		>
		<Image
		  source={image}
		  style={{ width: 32, height: 32 }}
		  />
              </TouchableOpacity>
	    </SideMenu>
	);
    }

    toggle() {
	this.setState({
	    isOpen: !this.state.isOpen,
	});
    }

    onMenuItemSelected(item) {
	this.setState({
	    isOpen: false,
	    selectedItem: item,
	});
    }

    updateMenuState(isOpen) {
	this.setState({ isOpen });
    }
}

const styles = StyleSheet.create({
    container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#FFFCF5',
    },
    welcome: {
	fontSize: 40,
	color: 'black',
	textAlign: 'center',
	margin: 10,
    },
    instructions: {
	fontSize: 15,
	textAlign: 'center',
	color: '#353535',
	marginBottom: 5,
    },
    button: {
	position: 'absolute',
	top: 20,
	padding: 10,
    },
    menu: {
	flex: 1,
	width: window.width,
	height: window.height,
	backgroundColor: 'gray',
	padding: 20,
    },
    avatarContainer: {
	marginBottom: 20,
	marginTop: 20,
    },
    avatar: {
	width: 48,
	height: 48,
	borderRadius: 24,
	flex: 1,
    },
    name: {
	position: 'absolute',
	left: 70,
	top: 20,
    },
    item: {
	fontSize: 14,
	fontWeight: '300',
	paddingTop: 5,
    },
});
