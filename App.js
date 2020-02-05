import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator, c } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import About from "./screens/About";
import { createDrawerNavigator } from "react-navigation-drawer";
import Drawer from "./Components/Drawer";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const MainAppStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    About: {
      screen: About
    }
  },
  {
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    }
  },
  {
    headerMode: "none"
  }
);

const Stack = createDrawerNavigator(
  {
    MainStack: {
      screen: MainAppStack
    },
    AuthStack: {
      screen: AuthStack,
      navigationOptions: {
        drawerLockMode: "locked-closed"
      }
    }
  },
  {
    contentComponent: Drawer
  }
);

const MainNav = createAppContainer(Stack);

export default class App extends Component {
  render() {
    return <MainNav />;
  }
}
