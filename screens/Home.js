import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}> Home page </Text>
        {console.log(this.props)}
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Text>open Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("About")}
        >
          <Text>Go to About page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text>Go to Login page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text>Go to Signup page</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
