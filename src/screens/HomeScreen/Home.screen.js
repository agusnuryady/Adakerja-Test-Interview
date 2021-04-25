//package import
import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image } from 'react-native';

//local import here
import styles from './Home.styles';
import HomeLogic from './Home.logic';
import I18n from '../../i18n';
import { IMAGES, STYLES } from '../../configs';
import { Card } from '../../components';
import { FlipAnimated, SpinAnimated } from '../../animations';
import { widthByScreen } from '../../utils';

const HomeScreen = () => {
  //logic value here
  const { data, actions } = HomeLogic();

  //place your extension component here
  const _renderItemMenu = ({ item, index }) => {
    return (
      <Card
        onPress={() => actions.navigation.navigate(item.screen)}
        width={(widthByScreen(100) - 73) / 2}
        height={(widthByScreen(100) - 73) / 2}
        styleContainer={styles.menuConten}
        styleWrap={[styles.menuWrap, STYLES.mr12]}
        color={item.color}
        types="button"
      >
        <FlipAnimated style={STYLES.mrb12} duration={item.duration}>
          <View style={[styles.iconCircle, STYLES.mrb12]}>{item.icon}</View>
        </FlipAnimated>
        <Text numberOfLines={1} style={styles.menuTitle}>
          {I18n.t(item.name)}
        </Text>
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.wrapHeader}>
          <Text style={styles.headerTitle}>{I18n.t('welcomeTo')}</Text>
          <SpinAnimated style={STYLES.mr12}>
            <Image
              source={IMAGES.rnLogo}
              style={[styles.rnLogo]}
              resizeMode="contain"
            />
          </SpinAnimated>
          <Text style={[styles.headerTitle, STYLES.mrb4]}>
            React Native 0.63
          </Text>
          <Text style={styles.headerDesc}>
            {I18n.t('createdBy')} @agusnuryady
          </Text>
        </View>
        <FlatList
          data={data.listMenu}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={_renderItemMenu}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
