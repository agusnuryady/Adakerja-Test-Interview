//package import here
import React from 'react';
import { View, Text } from 'react-native';

//local import here
import styles from './Login.styles';
import LoginLogic from './Login.logic';
import I18n from '../../i18n';
import { Header, Button, Input } from '../../components';
import { COLORS, STYLES } from '../../configs';
import { ArrowLeftIcon, LinkedInIcon } from '../../assets/svgs';

const LoginScreen = () => {
  //logic value here
  const { data, actions } = LoginLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header shadow={false}>
        <Button
          types="nude"
          onPress={actions.goBack}
          styleContainer={styles.backContainer}
          styleWrap={styles.backWrap}
        >
          <ArrowLeftIcon width="20" heigh="20" fill={COLORS.black} />
        </Button>
        <Text style={styles.headerTitle}>{I18n.t('signIn')}</Text>
      </Header>
      <View style={styles.content}>
        <Text style={[styles.textTitle, STYLES.mrb8]}>Lorem ipsum</Text>
        <Text style={[styles.textDesc, STYLES.mrb20]}>
          Lorem ipsum dolor sit amet
        </Text>
        <Input
          label={I18n.t('name')}
          value={data.name}
          onChangeText={(val) => actions.setName(val)}
          placeholder={I18n.t('name')}
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
          isError={data.name ? false : true}
          errorMessage={I18n.t('formCantEmpty')}
        />
        <Input
          label={I18n.t('phoneNumber')}
          value={data.phone}
          onChangeText={(val) => actions.setPhone(val)}
          placeholder="089xxx"
          keyboardType="phone-pad"
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
          isError={data.phone ? false : true}
          errorMessage={I18n.t('formCantEmpty')}
        />
        <Button
          title={I18n.t('signIn')}
          disabled={!data.name}
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
              onPress={() => actions.navigation.navigate('Register')}
            >
              {' '}
              {I18n.t('register')}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
