import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';


type Props = {};
export default class App extends Component<Props> {
    render() {
	return (
	    <View style={styles.container}>
	      {
		  this._renderGrid()
	      }
	      <View style={{width: '100%', height: 1, backgroundColor: 'black'}}></View>
	      {
		  this._renderSection()
	      }
	    </View>
	);
    }

    _renderGrid() {
	return (
	    <FlatGrid
	      style={{ width: '100%' }}
	      itemDimension={130}
	      items={[1,2,3,4,5,6]}
	      renderItem={({ item }) => (
		  <View
		    style={{
			height: 200,
			backgroundColor: 'green',
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 6,
		    }}>
		    <Text
		      style={{
			  color: 'black',
			  fontSize: 26,
		      }}>{item}</Text>
		  </View>
	      )}
	    />
	);
    }

    _renderSection() {
	return (
	    <SectionGrid
	      style={{ width: '100%' }}
	      itemDimension={130}
	      sections={[
		  {
		      title: 'Numbers',
		      data: [1,2,3,4,5,6],
		  },
		  {
		      title: 'Albhabets',
		      data: ['A', 'B', 'C', 'D', 'E'],
		  },
	      ]}
	      renderItem={({ item }) => (
		  <View
		    style={{
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			height: 100,
			backgroundColor: 'skyblue',
		    }}>
		    <Text
		      style={{
			  color: 'black',
			  fontSize: 17,
		      }}>{item}</Text>
		  </View>)}
	    renderSectionHeader={({ section }) => (
		<Text
		  style={{
		      color: 'black',
		      fontSize: 20,
		      backgroundColor: '#a0a0a080',
		      padding: 4,
		      paddingHorizontal: 7,
		  }}>{section.title}</Text>
	    )}
		/>
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
