//package import here
import { useEffect, useState } from 'react';

//local import here
import ComponentNavigator from './Component.navigator';

const ComponentLogic = () => {
  //package value here
  const { navigator } = ComponentLogic.dependencies;
  const { goBack } = navigator();

  //state value here
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertWarning, setAlertWarning] = useState(false);
  const [alertInformation, setAlertInformation] = useState(false);
  const [alertError, setAlertError] = useState(false);

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here

  return {
    //data props here
    data: {
      alertSuccess,
      alertWarning,
      alertInformation,
      alertError,
    },
    //actions props here
    actions: {
      goBack,
      setAlertSuccess,
      setAlertWarning,
      setAlertInformation,
      setAlertError,
    },
  };
};

export default ComponentLogic;

ComponentLogic.dependencies = {
  navigator: ComponentNavigator,
};
