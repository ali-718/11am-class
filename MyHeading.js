import React, { Component } from "react";
import { Text, View, SafeAreaView, StatusBar } from "react-native";

export class MyHeading extends Component {
  render() {
    return (
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
        <Text style={{ fontSize: 20 }}> {this.props.heading} </Text>
        <Text>{this.props.smallText}</Text>
      </SafeAreaView>
    );
  }
}
