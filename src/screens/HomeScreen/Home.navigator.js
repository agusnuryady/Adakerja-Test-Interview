import { useNavigation } from '@react-navigation/native';

const HomeNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToLogin = () =>
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });

  const goToCommitList = () => navigation.navigate('CommitList');

  return {
    navigation,
    goBack,
    goToLogin,
    goToCommitList,
  };
};

export default HomeNavigator;
