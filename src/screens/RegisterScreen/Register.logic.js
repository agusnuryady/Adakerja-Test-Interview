//package import here
import { useEffect, useState } from 'react';

//local import here
import RegisterNavigator from './Register.navigator';

const RegisterLogic = () => {
  //package value here
  const { navigator } = RegisterLogic.dependencies;
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

export default RegisterLogic;

RegisterLogic.dependencies = {
  navigator: RegisterNavigator,
};
