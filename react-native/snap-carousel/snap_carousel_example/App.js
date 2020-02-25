import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const App: () => React$Node = () => {

  const [ entries ] = useState([
    {
      title: 'A',
      description: 'This is A',
    },
    {
      title: 'B',
      description: 'This is B',
    },
    {
      title: 'C',
      description: 'This is C',
    }
  ]);

  const _carousel = useRef();

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{ item.title }</Text>
	<Text style={styles.description}>{ item.description }</Text>
      </View>
    );
  }

  const [ sliderWidth, setSliderWidth ] = useState(350);
  const [ itemWidth, setItemWidth ] = useState(290);
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <ScrollView
          style={styles.scrollView}>
	  <View
	    style={styles.container}>
	    <View style={styles.carousel}
		  onLayout={({nativeEvent : {layout}}) => {
		    console.log('layout:', layout);
		    setSliderWidth(layout.width);
		    setItemWidth(layout.width * 0.8);
	      }}>
	      <Carousel
		ref={_carousel}
		data={entries}
		renderItem={_renderItem}
		sliderWidth={sliderWidth}
		itemWidth={itemWidth}
		activeSlideOffset={20}
		/>
	    </View>
	  </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  container: {
    padding: 12,
  },
  carousel: {
    borderWidth: 1,
  },
  slide: {
    borderWidth: 1,
    padding: 20,
    margin: 7,
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
