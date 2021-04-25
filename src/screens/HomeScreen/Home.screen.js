//package import
import React from 'react';
import { View, Text, FlatList, Image, StatusBar } from 'react-native';
import moment from 'moment';
import Modal from 'react-native-modal';

//local import here
import styles from './Home.styles';
import HomeLogic from './Home.logic';
import I18n from '../../i18n';
import { COLORS, IMAGES, STYLES } from '../../configs';
import { Button, Header, Input } from '../../components';
import { abbreviateNumber } from '../../utils';
import { BookIcon, StarIcon } from '../../assets/svgs';
import { FONT_BODY3, FONT_HEADLINE_H4 } from '../../configs/fonts';

const HomeScreen = () => {
  //logic value here
  const { data, actions } = HomeLogic();

  //place your extension component here
  const _renderItemMenu = ({ item, index }) => {
    return (
      <Button
        types="nude"
        styleWrap={STYLES.br0}
        styleContainer={styles.wrapItem}
      >
        <View style={styles.contentItem}>
          <BookIcon width={18} height={18} fill={COLORS.black70} />
          <View style={[STYLES.fx1, STYLES.pdl8]}>
            <Text style={[styles.titleItem, STYLES.mrb4]}>{item.title}</Text>
            <Text style={STYLES.mrb8}>{item.desc}</Text>
            {item.tag.length ? (
              <View style={styles.tagWrap}>
                {item.tag.map((tagItem, tagIndex) => (
                  <View key={tagIndex + 1} style={styles.tagBox}>
                    <Text style={styles.tagText}>{tagItem}</Text>
                  </View>
                ))}
              </View>
            ) : null}
            <View style={styles.tagWrap}>
              {item.star > 0 ? (
                <View style={[STYLES.rowAlgCenter, STYLES.mrr16]}>
                  <StarIcon width={16} height={16} fill={COLORS.black70} />
                  <Text style={[styles.infoText, STYLES.mrl4]}>
                    {abbreviateNumber(item.star)}
                  </Text>
                </View>
              ) : null}
              {item.language ? (
                <View style={[STYLES.rowAlgCenter, STYLES.mrr16]}>
                  <View
                    style={[
                      styles.pinCircle,
                      { backgroundColor: actions._pinColor(item.language) },
                    ]}
                  />
                  <Text style={[styles.infoText, STYLES.mrl4]}>
                    {item.language}
                  </Text>
                </View>
              ) : null}
              {item.licence ? (
                <View style={[STYLES.rowAlgCenter, STYLES.mrr16]}>
                  <Text style={styles.infoText}>{item.licence}</Text>
                </View>
              ) : null}
              {item.lastUpdate ? (
                <View style={[STYLES.rowAlgCenter, STYLES.mrr16]}>
                  <Text style={styles.infoText}>
                    {moment(item.lastUpdate, 'YYYY-MM-DD hh:mm:ss').fromNow()}
                  </Text>
                </View>
              ) : null}
              {item.issue ? (
                <View style={[STYLES.rowAlgCenter, STYLES.mrr16]}>
                  <Text style={styles.infoText}>
                    {item.issue} issues need help
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>
      </Button>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.black} />
      <Header color={COLORS.black} styleContainer={styles.headerContainer}>
        <View style={[STYLES.fx1, STYLES.rowAlgCenter, STYLES.mrl16]}>
          <Image
            source={IMAGES.githubIcon}
            resizeMode="contain"
            style={styles.imageLogo}
          />
          <Text style={styles.textName} numberOfLines={2}>
            Welcome,{'\n'}
            {data.username}
          </Text>
        </View>
        <View style={[STYLES.fx1, STYLES.alItCenter]} />
        <View style={[STYLES.fx1, STYLES.alItEnd]}>
          <Button
            width={80}
            types="ghost"
            color={COLORS.primaryWhite}
            title={I18n.t('signOut')}
            styleWrap={STYLES.mrr16}
            styleContainer={styles.buttonSignOut}
            onPress={() => actions.setModalLogout(!data.modalLogout)}
          />
        </View>
      </Header>
      <View style={styles.wrapInput}>
        <Input
          value={data.search}
          onChangeText={(val) => actions.setSearch(val)}
          placeholder="Search or jump to..."
          returnKeyType="search"
          autoCapitalize="none"
          styleWrap={styles.wrapSearch}
          styleBox={styles.boxSearch}
          onSubmitEditing={actions._handleSearch}
        />
        <View style={STYLES.fx1}>
          <Button
            color={COLORS.green50}
            title="Search"
            styleWrap={[STYLES.mrl8]}
            styleContainer={styles.buttonSearch}
            onPress={actions._handleSearch}
          />
        </View>
      </View>
      <FlatList
        data={data.dataList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItemMenu}
      />
      <Modal
        backdropOpacity={0.3}
        isVisible={data.modalLogout}
        onBackdropPress={() => actions.setModalLogout(!data.modalLogout)}
        onBackButtonPress={() => actions.setModalLogout(!data.modalLogout)}
      >
        <View style={styles.containerModal}>
          <View style={styles.wrapModal}>
            <Text style={[FONT_HEADLINE_H4, STYLES.mrb16]}>LOG OUT</Text>
            <Text style={[FONT_BODY3, STYLES.mrb12]}>
              Are you sure want to log out?
            </Text>
            <Text style={[FONT_BODY3, STYLES.mrb24]}>
              Remember, logging out kills all your updates informations from us.
            </Text>
            <View style={STYLES.rowAlgCenter}>
              <Button
                title={'Sign out'}
                // disabled={!phone || !name}
                types="filled"
                styleWrap={[styles.wrapButton, STYLES.mrr8]}
                color={COLORS.primaryBlack}
                onPress={actions._logOut}
              />
              <Button
                title={'Cancel'}
                // disabled={!phone || !name}
                types="nude"
                styleWrap={[styles.wrapButton, STYLES.mrl8]}
                styleText={styles.textCancel}
                onPress={() => actions.setModalLogout(!data.modalLogout)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
