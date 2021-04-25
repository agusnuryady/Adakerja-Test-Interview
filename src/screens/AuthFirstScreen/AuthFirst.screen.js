//package import here
import React from 'react';
import { View, Text } from 'react-native';

//local import here
import styles from './AuthFirst.styles';
import AuthFirstLogic from './AuthFirst.logic';
import I18n from '../../i18n';
import { Alert, Button, Card, Input } from '../../components';
import { COLORS, IMAGES, ENDPOINT } from '../../configs';

const AuthFirstScreen = () => {
  //logic value here
  const { data, actions } = AuthFirstLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <Text>AuthFirst Screen</Text>
    </View>
  );
};

export default AuthFirstScreen;
