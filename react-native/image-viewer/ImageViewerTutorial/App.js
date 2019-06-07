import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const images = [{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
        // headers: ...
    }
}, {
    props: {
        // Or you can set source directory.
        url: '',
        source: require('./img.png')
    }
}]

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
	<Modal visible={true} transparent={true}>
	  <ImageViewer imageUrls={images} />
	</Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
