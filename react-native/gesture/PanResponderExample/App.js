import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	PanResponder,
	Image,
	Animated,
	TouchableOpacity,
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
			pan: new Animated.ValueXY(),
			scale: new Animated.Value(1),
		};
	}

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onMoveShouldSetResponderCapture: () => true,
			// https://codedaily.io/tutorials/1/Maintain-Touchable-Items-with-a-Parent-PanResponder-in-React-Native
			// onMoveShouldSetPanResponderCapture: () => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => {
				// https://stackoverflow.com/a/47616548/5676460
				// return true if user is swiping, return false if it's a single click
                return !(gestureState.dx === 0 && gestureState.dy === 0);
			},
			onPanResponderGrant: (e, gestureState) => {
				this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
				this.state.pan.setValue({x: 0, y: 0});
				Animated.spring(
					this.state.scale,
					{ toValue: 1.1, friction: 3 }
				).start();
			},
			onPanResponderMove: Animated.event([
				null, {dx: this.state.pan.x, dy: this.state.pan.y},
			]),
			onPanResponderRelease: (e, {vx, vy}) => {
				this.state.pan.flattenOffset();
				Animated.spring(this.state.scale, {toValue: 1, friction: 3}).start();
			},			
		});
	}
	
	render() {
		let { pan, scale } = this.state;
		let [translateX, translateY] = [pan.x, pan.y];
		let rotate = '0deg';
		let imageStyle = {transform: [{translateX}, {translateY}, {rotate}, {scale}]};
		
    return (
		<View style={styles.container}>
		  <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
			<TouchableOpacity
			  onPress={() => alert('!!')}>
			<Image
			  source={{uri: 'https://mindthecode.com/images/panresponder-target.png'}}
			  style={{ width: 100, height: 100 }}/>
			</TouchableOpacity>
		  </Animated.View>
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
