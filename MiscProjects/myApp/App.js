
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SignUpScreen from './SignUpScreen';
import WelcomeScreen from  './WelcomeScreen';
import GrabGameScreen from './GrabGameScreen';
import CongratsScreen from './CongratsScreen';


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    // SignIn: SigninScreen,
    SignUp: SignUpScreen,
    Grab: GrabGameScreen,
    Congrats: CongratsScreen,
    // Congrats: CongratsScreen,
    // Home: HomeScreen,
    // Details: DetailsScreen,
    // Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Welcome',
  }
);


