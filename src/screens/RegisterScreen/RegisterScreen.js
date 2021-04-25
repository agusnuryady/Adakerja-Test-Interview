//package import
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//local import
import styles from './styles';
import I18n from '../../i18n';
import { Header, Button, Input } from '../../components';
import { COLORS, STYLES } from '../../configs';
import { ArrowLeftIcon, LinkedInIcon } from '../../assets/svgs';

const RegisterScreen = () => {
  //package value
  const navigation = useNavigation();

  //state value
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  //variable value

  //native effect
  useEffect(() => {
    //function here
  }, []);

  //place your function in here

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header shadow={false}>
        <Button
          types="nude"
          onPress={() => navigation.goBack()}
          styleContainer={styles.backContainer}
          styleWrap={styles.backWrap}
        >
          <ArrowLeftIcon width="20" heigh="20" fill={COLORS.black} />
        </Button>
        <Text style={styles.headerTitle}>{I18n.t('register')}</Text>
      </Header>
      <View style={styles.content}>
        <Text style={[styles.textTitle, STYLES.mrb8]}>Mari Bergabung</Text>
        <Text style={[styles.textDesc, STYLES.mrb20]}>
          Lorem ipsum dolor sit amet
        </Text>
        <Input
          label={I18n.t('name')}
          value={name}
          onChangeText={(val) => setName(val)}
          placeholder={I18n.t('name')}
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
          isError={name ? false : true}
          errorMessage={I18n.t('formCantEmpty')}
        />
        <Input
          label={I18n.t('phoneNumber')}
          value={phone}
          onChangeText={(val) => setPhone(val)}
          placeholder="089xxx"
          keyboardType="phone-pad"
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
          isError={phone ? false : true}
          errorMessage={I18n.t('formCantEmpty')}
        />
        <Button
          title={I18n.t('register')}
          disabled={!name}
          styleWrap={STYLES.mrb20}
        />
        <View style={styles.wrapCenter}>
          <Text style={[styles.textDesc, STYLES.mrb16]}>{I18n.t('or')}</Text>
        </View>
        <View style={styles.rowButton}>
          <Button
            styleWrap={[styles.wrapButton, STYLES.mrb20]}
            styleContainer={styles.row}
            color={COLORS.red60}
          >
            <LinkedInIcon width="22" height="22" fill={COLORS.primaryWhite} />
            <Text style={[styles.textButton, STYLES.mrl12]}>Google</Text>
          </Button>
          <Button
            styleWrap={[styles.wrapButton, STYLES.mrb20]}
            styleContainer={styles.row}
            color={COLORS.primaryBlue}
          >
            <LinkedInIcon width="22" height="22" fill={COLORS.primaryWhite} />
            <Text style={[styles.textButton, STYLES.mrl12]}>Facebook</Text>
          </Button>
        </View>
        <View style={styles.wrapCenter}>
          <Text style={[styles.textBlur, STYLES.mrb16]}>
            {I18n.t('dontHaveAccount')}
            <Text
              style={styles.textLink}
              onPress={() => navigation.navigate('Login')}
            >
              {' '}
              {I18n.t('signIn')}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
