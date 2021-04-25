//package import here
import { useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//local import here
import AuthFirstNavigator from './AuthFirst.navigator';
import { STORAGE_KEY } from '../../constants';

const AuthFirstLogic = () => {
  //package value here
  const { navigator } = AuthFirstLogic.dependencies;
  const { goBack, navigation } = navigator();

  //state value here

  //variable value here

  useEffect(() => {
    //function here
    _validateLogin();
  }, [_validateLogin]);

  //place your function in here
  const _validateLogin = useCallback(async () => {
    const token = await AsyncStorage.getItem(STORAGE_KEY.TOKEN_LOGIN);

    if (token) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }
  }, [navigation]);

  return {
    //data props here
    data: {},
    //actions props here
    actions: {
      goBack,
    },
  };
};

export default AuthFirstLogic;

AuthFirstLogic.dependencies = {
  navigator: AuthFirstNavigator,
};
