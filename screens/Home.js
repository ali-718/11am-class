import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

export default class Home extends Component {
  state = {
    data: [
      { name: "ali", age: 21 },
      { name: "shiraz", age: 24 },
      { name: "usama", age: 22 }
    ]
  };

  render() {
    return (
      <SafeAreaView style={{ width: "100%", flex: 1 }}>
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

        <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
          {this.state.data.map(item => (
            <View
              style={{
                width: "90%",
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "black",
                padding: 20,
                marginTop: 20
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text key={item} style={{ color: "black" }}>
                  Name:{" "}
                </Text>
                <Text key={item} style={{ color: "red" }}>
                  {item.name}
                </Text>
              </View>
              <Text key={item} style={{ color: "red" }}>
                Age: {item.age}
              </Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
    );
  }
}
