//package import here
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  SectionList,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import moment from 'moment';

//local import here
import styles from './CommitList.styles';
import CommitListLogic from './CommitList.logic';
import I18n from '../../i18n';
import { Button, Header, ScreenMessage } from '../../components';
import { COLORS, IMAGES, STYLES } from '../../configs';
import {
  ArrowDropdownIcon,
  BookIcon,
  BranchIcon,
  CheckIcon,
  CrossIcon,
  GitCommitIcon,
} from '../../assets/svgs';

const CommitListScreen = () => {
  //logic value here
  const { data, actions } = CommitListLogic();

  //place your extension component here
  const _renderHeaderItem = ({ section }) => {
    return (
      <View style={styles.wrapSectHead}>
        <View style={styles.wrapLineHead}>
          <View style={styles.lineHead} />
          <View style={styles.wrapIcon}>
            <GitCommitIcon width={18} height={18} fill={COLORS.black70} />
          </View>
        </View>
        <Text style={[styles.textSeactHead, STYLES.mrl12]}>
          Commits on {section.title}
        </Text>
      </View>
    );
  };

  const _renderItem = ({ item, index }) => {
    const totalIndex = data.sectionList.find(
      (itemSect) =>
        itemSect.title ===
        moment(item.commitDates, 'YYYY-MM-DD hh:mm:ss').format('MMM DD, YYYY')
    ).data.length;
    return (
      <View style={STYLES.pdh16}>
        <View
          style={[
            styles.wrapItem,
            index === 0 && styles.wrapFirstItem,
            index === totalIndex - 1 && styles.wrapLastItem,
            index !== totalIndex - 1 && styles.itemBotomBorder,
          ]}
        >
          <Text style={[styles.titleText, STYLES.mrb4]} numberOfLines={2}>
            {item.title}
            {'   '}
            <Text style={styles.moreText}> ... </Text>
          </Text>
          <View style={[STYLES.rowAlgCenter, STYLES.jsCspcBwn]}>
            {item.authored ? (
              <View style={[styles.wrapAvatar, STYLES.zIdx9]}>
                <Image
                  source={{ uri: item.authorAvatar }}
                  resizeMode="cover"
                  style={styles.imageAvatar}
                />
              </View>
            ) : null}
            <View
              style={[
                styles.wrapAvatar,
                item.authored ? styles.leftSlick : null,
              ]}
            >
              <Image
                source={{ uri: item.avatar }}
                resizeMode="cover"
                style={styles.imageAvatar}
              />
            </View>
            <View style={[STYLES.fx1, STYLES.mrl4]}>
              <Text style={styles.textUser}>
                {item.authored ? (
                  <Text style={styles.textUser}>
                    {item.authored}{' '}
                    <Text style={styles.smallText}>authored and </Text>
                  </Text>
                ) : null}
                {item.username}
                <Text style={styles.smallText}> committed</Text>{' '}
                {moment(item.commitDates, 'YYYY-MM-DD hh:mm:ss').fromNow()}
              </Text>
            </View>
            {_statusIcon(item.status)}
          </View>
        </View>
      </View>
    );
  };

  const _statusIcon = (status) => {
    switch (status) {
      case 'pass':
        return <CheckIcon width={10} height={10} fill={COLORS.green50} />;
      case 'failed':
        return <CrossIcon width={10} height={10} fill={COLORS.red50} />;
      case 'waiting':
        return <View style={styles.pinCircle} />;
      default:
        return <View />;
    }
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
      <View style={styles.wrapRepo}>
        <BookIcon width={18} height={18} fill={COLORS.black70} />
        {data.commitsState.title ? (
          <Text style={[styles.titleItem, STYLES.mrl8]}>
            {data.commitsState.title}
          </Text>
        ) : (
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              width={200}
              height={18}
              borderRadius={5}
              marginLeft={8}
            />
          </SkeletonPlaceholder>
        )}
      </View>
      <View style={styles.wrapBranch}>
        <View style={styles.wrapDropDown}>
          <BranchIcon width={12} height={12} fill={COLORS.black70} />
          <Text style={[styles.textDropDown, STYLES.mrh8]}>master</Text>
          <ArrowDropdownIcon width={8} height={8} fill={COLORS.primaryBlack} />
        </View>
      </View>
      <SectionList
        sections={data.sectionList}
        extraData={data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={STYLES.fxg1}
        onEndReached={actions._fetchLoadMore}
        ListEmptyComponent={
          <ScreenMessage
            sourceImage={IMAGES.thunderstorm}
            styleImage={styles.imageEmpty}
            styleContainer={{ backgroundColor: COLORS.primaryWhite }}
            title="No commits yet"
            desc="be the first one"
          />
        }
        renderItem={_renderItem}
        renderSectionHeader={_renderHeaderItem}
        ListFooterComponent={() => (
          <View style={STYLES.mrb16}>
            {data.commitsState.isLoading && (
              <View style={styles.wrapLoadingLoadMore}>
                <ActivityIndicator color={COLORS.primaryBlack} size="small" />
              </View>
            )}
          </View>
        )}
      />
      <Modal
        backdropOpacity={0.3}
        isVisible={data.modalLogout}
        onBackdropPress={() => actions.setModalLogout(!data.modalLogout)}
        onBackButtonPress={() => actions.setModalLogout(!data.modalLogout)}
      >
        <View style={styles.containerModal}>
          <View style={styles.wrapModal}>
            <Text
              style={[
                styles.titleItem,
                STYLES.mrb16,
                { color: COLORS.primaryBlack },
              ]}
            >
              LOG OUT
            </Text>
            <Text style={[styles.descItem, STYLES.mrb12]}>
              Are you sure want to log out?
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

export default CommitListScreen;
