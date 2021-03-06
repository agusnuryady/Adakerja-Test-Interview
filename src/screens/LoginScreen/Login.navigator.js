import { useNavigation } from '@react-navigation/native';

const LoginNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToLoginPass = () => navigation.navigate('LoginPass');

  return {
    navigation,
    goBack,
    goToLoginPass,
  };
};

export default LoginNavigator;
