import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import Modal from "react-native-modal";


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
	super(props);
	this.state = {
	    isModalVisible: false,
	};
    }

    _toggleModal() {
	this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    
    render() {
	return (
	    <View style={styles.container}>
	      <Button
		title='Click'
		onPress={() => this._toggleModal()}>
	      </Button>
	      <Modal isVisible={this.state.isModalVisible}>
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, }}>
		  <Text
		    style={{ color: 'black', fontSize: 24, margin: 10 }}>
		    Hello!
		  </Text>
		  <Button
		    title='Close'
		    onPress={() => this._toggleModal()}>
		  </Button>
		</View>
	      </Modal>
	    </View>
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

});
