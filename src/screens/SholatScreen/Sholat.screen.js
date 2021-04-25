//package import
import React from 'react';
import { View, Text, Image, ScrollView, RefreshControl } from 'react-native';
import moment from 'moment';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

//local import
import styles from './Sholat.styles';
import SholatLogic from './Sholat.logic';
import I18n from '../../i18n';
import { COLORS, IMAGES } from '../../configs';
import { isEmpty } from '../../utils';
import { Button, Header } from '../../components';
import { ArrowLeftIcon } from '../../assets/svgs';

const SholatScreen = () => {
  //logic value
  const { data, actions } = SholatLogic();

  //place your extension component here
  const _renderLoading = () => {
    return (
      <>
        <SkeletonPlaceholder>
          {data.emptyAray.map(({ item, index }) => (
            <SkeletonPlaceholder.Item
              key={index + 1}
              width="100%"
              padding={16}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <SkeletonPlaceholder.Item
                width={70}
                height={20}
                borderRadius={5}
              />
              <SkeletonPlaceholder.Item
                width={85}
                height={20}
                borderRadius={5}
              />
            </SkeletonPlaceholder.Item>
          ))}
        </SkeletonPlaceholder>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Header>
        <>
          <Button
            types="nude"
            onPress={actions.goBack}
            styleContainer={styles.backContainer}
            styleWrap={styles.backWrap}
          >
            <ArrowLeftIcon width="20" heigh="20" fill={COLORS.black} />
          </Button>
          <Text style={styles.headerTitle}>{I18n.t('prayerSchedule')}</Text>
        </>
      </Header>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={data.sholatState.isLoading}
            onRefresh={actions._getSchedule}
          />
        }
      >
        <View style={styles.wrapTop}>
          <View style={styles.containerTop}>
            <Text style={styles.topText}>
              {moment().format('DD MMMM YYYY')}
            </Text>
            <Text style={styles.topText}>Jakarta - Indonesia</Text>
          </View>
          <Image
            source={IMAGES.mosque}
            resizeMode="cover"
            style={styles.imageTop}
          />
        </View>
        <View style={styles.wrapList}>
          {data.sholatState.isLoading && isEmpty(data.sholatState.data) ? (
            _renderLoading()
          ) : (
            <>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(data.sholatState.data.imsak, 'hh:mm').add(
                      -1,
                      'minutes'
                    ),
                    moment(data.sholatState.data.subuh, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.imsak,
                      moment(data.sholatState.data.subuh, 'hh:mm')
                    ),
                  ]}
                >
                  Imsak
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.imsak,
                      moment(data.sholatState.data.subuh, 'hh:mm')
                    ),
                  ]}
                >
                  {data.sholatState.data.imsak} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(data.sholatState.data.subuh, 'hh:mm').add(
                      -1,
                      'minutes'
                    ),
                    moment(data.sholatState.data.terbit, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.subuh,
                      moment(data.sholatState.data.terbit, 'hh:mm')
                    ),
                  ]}
                >
                  Subuh
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.subuh,
                      moment(data.sholatState.data.terbit, 'hh:mm')
                    ),
                  ]}
                >
                  {data.sholatState.data.subuh} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(data.sholatState.data.terbit, 'hh:mm').add(
                      -1,
                      'minutes'
                    ),
                    moment(data.sholatState.data.dhuha, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.terbit,
                      moment(data.sholatState.data.dhuha, 'hh:mm')
                    ),
                  ]}
                >
                  Terbit
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.terbit,
                      moment(data.sholatState.data.dhuha, 'hh:mm')
                    ),
                  ]}
                >
                  {data.sholatState.data.terbit} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(data.sholatState.data.dhuha, 'hh:mm').add(
                      -1,
                      'minutes'
                    ),
                    moment(data.sholatState.data.dzuhur, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.dhuha,
                      moment(data.sholatState.data.dzuhur, 'hh:mm')
                    ),
                  ]}
                >
                  Dhuha
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.dhuha,
                      moment(data.sholatState.data.dzuhur, 'hh:mm')
                    ),
                  ]}
                >
                  {data.sholatState.data.dhuha} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(data.sholatState.data.dzuhur, 'hh:mm').add(
                      -1,
                      'minutes'
                    ),
                    moment(data.sholatState.data.ashar, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.dzuhur,
                      moment(data.sholatState.data.ashar, 'hh:mm')
                    ),
                  ]}
                >
                  Dzuhur
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.dzuhur,
                      moment(data.sholatState.data.ashar, 'hh:mm')
                    ),
                  ]}
                >
                  {data.sholatState.data.dzuhur} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(data.sholatState.data.ashar, 'hh:mm').add(
                      -1,
                      'minutes'
                    ),
                    moment(data.sholatState.data.maghrib, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.ashar,
                      moment(data.sholatState.data.maghrib, 'hh:mm')
                    ),
                  ]}
                >
                  Ashar
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.ashar,
                      moment(data.sholatState.data.maghrib, 'hh:mm')
                    ),
                  ]}
                >
                  {data.sholatState.data.ashar} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(data.sholatState.data.maghrib, 'hh:mm').add(
                      -1,
                      'minutes'
                    ),
                    moment(data.sholatState.data.isya, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.maghrib,
                      moment(data.sholatState.data.isya, 'hh:mm')
                    ),
                  ]}
                >
                  Maghrib
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.maghrib,
                      moment(data.sholatState.data.isya, 'hh:mm')
                    ),
                  ]}
                >
                  {data.sholatState.data.maghrib} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(data.sholatState.data.isya, 'hh:mm').add(
                      -1,
                      'minutes'
                    ),
                    moment(data.sholatState.data.subuh, 'hh:mm').add(1, 'days')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.isya,
                      moment(data.sholatState.data.subuh, 'hh:mm').add(
                        1,
                        'days'
                      )
                    ),
                  ]}
                >
                  Isya
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    actions._timeChecker(
                      data.sholatState.data.isya,
                      moment(data.sholatState.data.subuh, 'hh:mm').add(
                        1,
                        'days'
                      )
                    ),
                  ]}
                >
                  {data.sholatState.data.isya} AM
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SholatScreen;
