import { useNavigation } from '@react-navigation/native';

const LoginPassNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToHome = () =>
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });

  return {
    navigation,
    goBack,
    goToHome,
  };
};

export default LoginPassNavigator;
