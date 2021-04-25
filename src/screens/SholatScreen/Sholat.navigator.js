import { useNavigation } from '@react-navigation/native';

const SholatNavigator = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return {
    navigation,
    goBack,
  };
};

export default SholatNavigator;
