//package import here
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

//local import here
import LoginPassNavigator from './LoginPass.navigator';
import { setPassword } from '../../redux/redux-actions';
import { DATADUMMY, STORAGE_KEY } from '../../constants';

const LoginPassLogic = () => {
  //package value here
  const { navigator } = LoginPassLogic.dependencies;
  const { goBack, goToHome } = navigator();
  const dispatch = useDispatch();

  //state value here
  const authState = useSelector((state) => state.auth);

  //variable value here
  const [iserror, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    //function here
    setIsError(false);
    setErrorMessage('');
  }, [authState.password]);

  //place your function in here
  const _setPassword = useCallback(
    (val) => {
      dispatch(setPassword(val));
    },
    [dispatch]
  );

  const _validatePassword = useCallback(() => {
    if (
      DATADUMMY.user.find(
        (item) =>
          item.email === authState.email && item.password === authState.password
      )
    ) {
      const dataUser = DATADUMMY.user.find(
        (item) => item.email === authState.email
      );
      AsyncStorage.setItem(STORAGE_KEY.TOKEN_LOGIN, dataUser.username);
      goToHome();
    } else {
      setIsError(true);
      setErrorMessage('Incorect password');
    }
  }, [authState.email, authState.password, goToHome]);

  return {
    //data props here
    data: {
      authState,
      iserror,
      errorMessage,
    },
    //actions props here
    actions: {
      goBack,
      _setPassword,
      _validatePassword,
    },
  };
};

export default LoginPassLogic;

LoginPassLogic.dependencies = {
  navigator: LoginPassNavigator,
};
