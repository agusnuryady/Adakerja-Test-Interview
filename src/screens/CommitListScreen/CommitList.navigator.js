import { useNavigation } from '@react-navigation/native';

const CommitListNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToLogin = () =>
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });

  return {
    navigation,
    goBack,
    goToLogin,
  };
};

export default CommitListNavigator;
