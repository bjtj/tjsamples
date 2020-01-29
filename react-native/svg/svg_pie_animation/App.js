import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Easing,
    Animated,
    Button
} from 'react-native';

import Svg, {G} from 'react-native-svg';
import Slice from "./Slice";
const AnimatedSlice = Animated.createAnimatedComponent(Slice);
const demoData = [
    {
        number: 60,
        color: '#0d2f51'
    },
    {
        number: 20,
        color: '#28BD8B'
    },
    {
        number: 20,
        color: '#F66A6A'
    }
];



export default class App extends Component {
    constructor(props) {
	super(props);
	this.state = {
            animValue: new Animated.Value(0.1),
        };
    }

    resetPie = ()=>{
        this.state.animValue.setValue(0.1);
    };

    animate = ()=>{
        Animated.timing(
            this.state.animValue,
            {
                toValue: 2,
                duration: 500,
                easing: Easing.inOut(Easing.quad)
            }
        ).start(()=>{
            setTimeout(this.resetPie, 2000);
        });
    };

    render() {
	let endAngle = Animated.multiply(this.state.animValue, Math.PI);
        return (
	    <SafeAreaView>
              <View style={styles.container}>
		<Svg
                  width={200}
                  style={styles.pieSVG}
                  height={200}
                  viewBox={`-100 -100 200 200`}
                  >
                  <G>
                    {
			demoData.map( (item, index) => {
                            return (
				<AnimatedSlice
                                  index={index}
                                  endAngle={endAngle}
                                  color={item.color}
                                  data={demoData}
                                  key={'pie_shape_' + index}
                                  />
                            )
			})
                    }
            </G>
                </Svg>
                <View style={{marginTop: 20}}>
                <Button onPress={this.animate} title="Click"/>
                </View>

            </View>
		</SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safe: {
	...StyleSheet.fillAbsolluteObject,
	flex: 1,
    },
    container: {
	padding: 25,
    }
});

