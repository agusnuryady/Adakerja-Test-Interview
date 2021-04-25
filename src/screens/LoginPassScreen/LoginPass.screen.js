//package import here
import React from 'react';
import { View, Text, StatusBar, ImageBackground, Image } from 'react-native';

//local import here
import styles from './LoginPass.styles';
import LoginPassLogic from './LoginPass.logic';
import I18n from '../../i18n';
import { Button, Header, Input } from '../../components';
import { COLORS, IMAGES, STYLES } from '../../configs';
import { MenuIcon } from '../../assets/svgs';

const LoginPassScreen = () => {
  //logic value here
  const { data, actions } = LoginPassLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.black} />
      <ImageBackground
        source={IMAGES.spaceBG}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Header
          shadow={false}
          color={COLORS.transparent}
          styleContainer={styles.headerContainer}
        >
          <Image
            source={IMAGES.githubIcon}
            resizeMode="contain"
            style={[styles.imageLogo, STYLES.mrl16]}
          />
          <View style={STYLES.rowAlgCenter}>
            <Button
              types="ghost"
              color={COLORS.primaryWhite}
              title="Sign up"
              styleContainer={styles.buttonSignUp}
            />
            <Button
              types="nude"
              color={COLORS.primaryWhite}
              width={35}
              height={35}
              styleWrap={STYLES.mrh12}
            >
              <MenuIcon width={22} height={22} fill={COLORS.primaryWhite} />
            </Button>
          </View>
        </Header>
        <View style={styles.content}>
          <Text style={styles.textBigTitle}>
            Where the world builds software
          </Text>
          <Text style={styles.textSubTitle}>
            Millions of developers and companies build, ship, and maintain their
            software on GitHub—the largest and most advanced development
            platform in the world.
          </Text>
          <View style={[styles.wrapForm, STYLES.mrb24]}>
            <Input
              value={data.authState.password}
              onChangeText={(val) => actions._setPassword(val)}
              placeholder={I18n.t('password')}
              returnKeyType="done"
              autoCapitalize="none"
              styleWrap={STYLES.mrb8}
              styleBox={styles.styleBox}
              isError={data.iserror}
              errorMessage={data.errorMessage}
              isSecure={true}
            />
            <Button
              color={COLORS.green50}
              disabled={!data.authState.password}
              title="Submit"
              styleContainer={styles.buttonContainer}
              onPress={actions._validatePassword}
            />
          </View>
          <View style={styles.wrapInfo}>
            <View style={STYLES.fx1}>
              <Text style={styles.textDesc}>
                56
                <Text style={[styles.textDesc, { color: COLORS.black60 }]}>
                  +
                </Text>{' '}
                million
              </Text>
              <Text style={styles.textSubDesc}>Developers</Text>
            </View>
            <View style={STYLES.fx1}>
              <Text style={styles.textDesc}>
                3
                <Text style={[styles.textDesc, { color: COLORS.black60 }]}>
                  +
                </Text>{' '}
                million
              </Text>
              <Text style={styles.textSubDesc}>Organizations</Text>
            </View>
          </View>
          <View style={styles.wrapInfo}>
            <View style={STYLES.fx1}>
              <Text style={styles.textDesc}>
                100
                <Text style={[styles.textDesc, { color: COLORS.black60 }]}>
                  +
                </Text>{' '}
                million
              </Text>
              <Text style={styles.textSubDesc}>Repositories</Text>
            </View>
            <View style={STYLES.fx1}>
              <Text style={styles.textDesc}>
                72
                <Text style={[styles.textDesc, { color: COLORS.black60 }]}>
                  %
                </Text>{' '}
                million
              </Text>
              <Text style={styles.textSubDesc}>Fortune 50</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginPassScreen;
