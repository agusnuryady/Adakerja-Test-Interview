import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//please short from a to z if adding new screen
import AuthFirstScreen from '../screens/AuthFirstScreen';
import CommitListScreen from '../screens/CommitListScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginPassScreen from '../screens/LoginPassScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SettingScreen from '../screens/SettingScreen';

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator headerMode="none" initialRouteName="AuthFirst">
    <Screen name="AuthFirst" component={AuthFirstScreen} />
    <Screen name="Home" component={HomeScreen} />
    <Screen name="CommitList" component={CommitListScreen} />
    <Screen name="Login" component={LoginScreen} />
    <Screen name="LoginPass" component={LoginPassScreen} />
    <Screen name="Register" component={RegisterScreen} />
    <Screen name="Setting" component={SettingScreen} />
  </Navigator>
);

export default Stack;
