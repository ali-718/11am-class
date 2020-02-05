import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

export default class About extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}> About page </Text>

        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Go back to home page</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
