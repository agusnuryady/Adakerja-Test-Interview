import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//please short from a to z if adding new screen
import ComponentScreen from '../screens/ComponentScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SettingScreen from '../screens/SettingScreen';
import SholatScreen from '../screens/SholatScreen';
import TodoScreen from '../screens/TodoScreen';
import WeatherScreen from '../screens/WeatherScreen';

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator headerMode="none" initialRouteName="Home">
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Component" component={ComponentScreen} />
    <Screen name="Login" component={LoginScreen} />
    <Screen name="Register" component={RegisterScreen} />
    <Screen name="Setting" component={SettingScreen} />
    <Screen name="Sholat" component={SholatScreen} />
    <Screen name="Todo" component={TodoScreen} />
    <Screen name="Weather" component={WeatherScreen} />
  </Navigator>
);

export default Stack;
