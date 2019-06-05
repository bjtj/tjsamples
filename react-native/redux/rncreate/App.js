import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
} from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import {
    addPlace,
    clearPlaces,
} from './actions/place';


class App extends Component {

    constructor(props) {
	super(props)
	this.state = {
	    placeName: '',
	    places: [],
	};
    }

    placeSubmitHandler() {
	if (this.state.placeName.trim() === '') {
	    return;
	}
	this.props.add(this.state.placeName);
    }

    placeNameChangeHandler(value) {
	this.setState({
	    placeName: value,
	});
    }

    clearPlacesHandler() {
	this.props.clear();
    }

    placesOutput() {
	return (
	    <FlatList
	      style={styles.listContainer}
	      data={this.props.places}
	      keyExtractor={(item, index) => {
		  console.log(`Item: ${item.value}, Index: ${index}`);
		  return index.toString();
	      }}
	      renderItem={info => (
		  <ListItem
		    placeName={ info.item.value }
		    />
	      )}
		/>
	);
    }
    
    render() {
	return (
	    <View style={styles.container}>
	      <Button
		title="Clear"
		onPress={this.clearPlacesHandler.bind(this)}>
	      </Button>
	      <View style={styles.inputContainer}>
		<TextInput
		  placeholder="Search Places"
		  style={styles.placeInput}
		  value={this.state.placeName}
		  onChangeText={this.placeNameChangeHandler.bind(this)}>
		</TextInput>
		<Button
		  title="Add"
		  style={styles.placeButton}
		  onPress={this.placeSubmitHandler.bind(this)}>
		</Button>
	      </View>
	      <View style={styles.listContainer}>
		{ this.placesOutput() }
	      </View>
	    </View>
	);
    }
}

const styles = StyleSheet.create({
    container: {
	paddingTop: 30,
	justifyContent: 'flex-start',
	alignItems: 'center',
    },
    inputContainer: {
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
    },
    placeInput: {
	width: '70%',
    },
    placeButton: {
	width: '30%',
    },
    listContainer: {
	width: '100%',
    },
});

const mapStateToProps = state => {
    return {
	places: state.places.places,
    };
};

const mapDispatchToProps = dispatch => {
    return {
	add: (name) => {
	    dispatch(addPlace(name));
	},
	clear: () => {
	    dispatch(clearPlaces());
	},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
