import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Login page </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text>Go to Home page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Text>open Drawer</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
