//package import here
import { useEffect, useState } from 'react';

//local import here
import LoginNavigator from './Login.navigator';

const LoginLogic = () => {
  //package value here
  const { navigator } = LoginLogic.dependencies;
  const { navigation, goBack } = navigator();

  //state value here
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here

  return {
    //data props here
    data: {
      name,
      phone,
    },
    //actions props here
    actions: {
      navigation,
      goBack,
      setName,
      setPhone,
    },
  };
};

export default LoginLogic;

LoginLogic.dependencies = {
  navigator: LoginNavigator,
};
