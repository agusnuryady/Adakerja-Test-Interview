//package import here
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

//local import here
import HomeNavigator from './Home.navigator';
import { COLORS } from '../../configs';
import { widthByScreen } from '../../utils';
import {
  MosqueIcon,
  SettingIcon,
  TodoIcon,
  WeatherIcon,
} from '../../assets/svgs';

const HomeLogic = () => {
  //package value here
  const { navigator } = HomeLogic.dependencies;
  const { navigation, goBack } = navigator();

  //state value here
  const persistState = useSelector((state) => state.persist);

  //variable value here
  const listMenu = [
    {
      name: 'signIn',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          fill={COLORS.primaryBlue}
        />
      ),
      color: COLORS.primaryBlue,
      screen: 'Login',
      duration: 3300,
    },
    {
      name: 'register',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          fill={COLORS.lime50}
        />
      ),
      color: COLORS.lime50,
      screen: 'Register',
      duration: 3300,
    },
    {
      name: 'component',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          fill={COLORS.yellow60}
        />
      ),
      color: COLORS.yellow60,
      screen: 'Component',
      duration: 3300,
    },
    {
      name: 'weather',
      icon: (
        <WeatherIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          fill={COLORS.blue30}
        />
      ),
      color: COLORS.blue30,
      screen: 'Weather',
      duration: 3000,
    },
    {
      name: 'prayer',
      icon: (
        <MosqueIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          fill={COLORS.green40}
        />
      ),
      color: COLORS.green40,
      screen: 'Sholat',
      duration: 3100,
    },
    {
      name: 'todoList',
      icon: (
        <TodoIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          fill={COLORS.yellow50}
        />
      ),
      color: COLORS.yellow50,
      screen: 'Todo',
      duration: 3200,
    },
    {
      name: 'setting',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          fill={COLORS.black60}
        />
      ),
      color: COLORS.black60,
      screen: 'Setting',
      duration: 3300,
    },
  ];

  useEffect(() => {
    //function here
    SplashScreen.hide();
  }, [persistState.language]);

  //place your function in here

  return {
    //data props here
    data: {
      persistState,
      listMenu,
    },
    //actions props here
    actions: {
      navigation,
      goBack,
    },
  };
};

export default HomeLogic;

HomeLogic.dependencies = {
  navigator: HomeNavigator,
};
