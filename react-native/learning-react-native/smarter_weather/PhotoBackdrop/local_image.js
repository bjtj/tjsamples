import React, { Component } from "react";

import { Image, ImageBackground } from "react-native";

import styles from "./style.js";

class PhotoBackdrop extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.backdrop}
        source={require("./flowers.png")}
        resizeMode="cover"
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}

export default PhotoBackdrop;
