//package import here
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../../redux/redux-actions';

//local import here
import LoginNavigator from './Login.navigator';
import { DATADUMMY, REGEX } from '../../constants';

const LoginLogic = () => {
  //package value here
  const { navigator } = LoginLogic.dependencies;
  const { goBack, goToLoginPass } = navigator();
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
  }, [authState.email]);

  //place your function in here
  const _setEmail = useCallback(
    (val) => {
      dispatch(setEmail(val));
    },
    [dispatch]
  );

  const _validateEmail = useCallback(() => {
    if (REGEX.email.test(authState.email)) {
      if (DATADUMMY.user.find((item) => item.email === authState.email)) {
        goToLoginPass();
      } else {
        setIsError(true);
        setErrorMessage('Incorect email');
      }
    } else {
      setIsError(true);
      setErrorMessage('Format email incorect');
    }
  }, [authState.email, goToLoginPass]);

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
      _setEmail,
      _validateEmail,
    },
  };
};

export default LoginLogic;

LoginLogic.dependencies = {
  navigator: LoginNavigator,
};
