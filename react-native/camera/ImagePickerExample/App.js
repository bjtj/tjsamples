import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';

import ImagePicker from 'react-native-image-picker';


const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
	skipBackup: true,
	path: 'images',
    },
};

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
	super(props);
	this.state = {
	    avatarSource: null,
	};
    }
    
    render() {
	return (
	    <View style={styles.container}>
	      <Button title="Click Me" onPress={() => this._getPicture()}></Button>
	      <Image source={this.state.avatarSource} style={styles.uploadAvatar}></Image>
	    </View>
	);
    }

    _getPicture() {
	ImagePicker.showImagePicker(options, (response) => {
	    console.log('Response = ', response);

	    if (response.didCancel) {
		console.log('User cancelled image picker');
	    } else if (response.error) {
		console.log('ImagePicker Error: ', response.error);
	    } else if (response.customButton) {
		console.log('User tapped custom button: ', response.customButton);
	    } else {
		const source = { uri: response.uri };

		// You can also display the image using data:
		// const source = { uri: 'data:image/jpeg;base64,' + response.data };

		this.setState({
		    avatarSource: source,
		});
	    }
	});
    }
}

const styles = StyleSheet.create({
    container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
    },
    uploadAvatar: {
	width: '100%',
	height: '90%',
    }
});
