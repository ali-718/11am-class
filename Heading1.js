import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Heading1 extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}
