/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    TouchableHighlight,
    PermissionsAndroid,
} from 'react-native';

import CameraRoll from '@react-native-community/cameraroll';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';


export class App extends Component {

    _imageRef = React.createRef();

    constructor(props) {
	super(props);
	this.state = {
	    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/thumb/2/24/Lenna.png/220px-Lenna.png',
	}
    }

    requestExternalStoragePermission = async () => {
	try {
	    const granted = await PermissionsAndroid.request(
		PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
		{
		    title: 'My App Storage Permission',
		    message: 'My App needs access to your storage ' +
			'so you can save your photos',
		},
	    );
	    return granted;
	} catch (err) {
	    console.error('Failed to request permission ', err);
	    alert('failed to request permission');
	    return null;
	}
    };

    componentDidMount() {
	if (Platform.OS === 'ios') {
	    // ios
	} else {
	    this.requestExternalStoragePermission();
	}
    }

    _basic() {
	console.log('basic()');
	
	// require the module
	var RNFS = require('react-native-fs');
	// get a list of files and directories in the main bundle
	RNFS.readDir(Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
	    .then((result) => {
		console.log('result.length: ', result.length);
		console.log('GOT RESULT', result);
		// stat the first file
		return Promise.all([RNFS.stat(result[0].path), result[0].path]);
	    })
	    .then((statResult) => {
		console.log('Stat result length: ', statResult.length); // 2 because parameters of Promise.all are 2
		console.log('Stat result: ', statResult);
		statResult.forEach(item => {
		    console.log('item: ', item);
		})
		if (statResult[0].isFile()) {
		    // if we have a file, read it
		    return RNFS.readFile(statResult[1], 'utf8');
		}
		return 'no file';
	    })
	    .then((contents) => {
		// log the file contents
		console.log('Content: ', contents);
	    })
	    .catch((err) => {
		console.log(err.message, err.code);
	    });


	var path = (Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath) + '/test.txt';
	console.log('path:', path);
	RNFS.readFile(path, 'utf8').then((content) => {
	    console.log('content', content);
	});
	
    }

    _share = () => {
	const { imageUrl } = this.state;
	// alert(imageUrl);
	RNFetchBlob.fetch('GET', imageUrl)
	    .then((res) => {
		let shareOptions = {
		    title: "React Native Share Example",
		    message: "Check out this photo!",
		    url: `data:image/jpg;base64,${res.base64()}`,
		    subject: "Check out this photo!"
		};
		Share.open(shareOptions)
		    .then((res) => console.log('res:', res))
		    .catch(err => console.log('err', err))
	    })
	    .catch (err => alert(err));
    }
    
    
    render() {
	
	const { imageUrl } = this.state;
	
	return (
	    <Fragment>
	      <StatusBar barStyle="dark-content" />
	      <SafeAreaView
		style={{
		    padding: 10,
		}}>
		<Button
		  title="Click"
		  onPress={() => this._basic()}>
		</Button>

		<View
		  style={{
		      padding: 20,
		  }}>
		  <Image
		    ref={ref => this._imageRef = ref}
		    style={{ height:200, width: 200 }}
		    source={{uri: imageUrl}}
		    />
		</View>
		<TouchableHighlight
		  style={styles.button}
		  onPress={this._handlePressImage.bind(this)} underlayColor='#ececec'>
		  <Text style={styles.buttonText}>Save Image</Text>
		</TouchableHighlight>

		<View
		  style={{
		      padding: 10,
		  }}>
		  <Button
		    title="Share"
		    onPress={this._share.bind(this)}>
		  </Button>
		</View>
		
	      </SafeAreaView>
	    </Fragment>
	);
    }

    _handlePressImage() {

	const { imageUrl } = this.state;

	Image.queryCache([imageUrl])
	    .then(data => alert(JSON.stringify(data)));
	
	var promise = CameraRoll.saveToCameraRoll(imageUrl);
	promise.then(function(result) {
	    alert('save succeeded ' + result);
	}).catch(function(error) {
	    alert('save failed ' + error);
	});
    }
}

const styles = StyleSheet.create({
    button: {
	borderWidth: 1,
	borderColor: 'black',
	borderRadius: 8,
	padding: 8,
    },
    buttonText: {
	fontSize: 18,
	textAlign: 'center',
    },
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
