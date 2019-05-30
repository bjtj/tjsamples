import React, { Component } from "react";

import Button from "./../Button";
import styles from "./style.js";

import Geolocation from '@react-native-community/geolocation';


const style = { backgroundColor: "#DDDDDD" };

class LocationButton extends Component {
	_onPress() {
		Geolocation.getCurrentPosition(info => {
			console.log(info);
			this.props.onGetCoords(info.coords.latitude, info.coords.longitude);
		});
  }

  render() {
    return (
      <Button
        label="Use Current Location"
        style={style}
        onPress={this._onPress.bind(this)}
      />
    );
  }
}

export default LocationButton;
