import React, { Component } from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";

export default class Signup extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Signup page </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text>Go to Home page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text>Go to Login page</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
