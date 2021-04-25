//package import here
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//local import here
import styles from './AuthFirst.styles';
import AuthFirstLogic from './AuthFirst.logic';
import { COLORS } from '../../configs';

const AuthFirstScreen = () => {
  //logic value here
  AuthFirstLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.primaryBlue} />
    </View>
  );
};

export default AuthFirstScreen;
