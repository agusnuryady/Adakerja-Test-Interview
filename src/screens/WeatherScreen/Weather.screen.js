//package import here
import React from 'react';
import { View, Text, Image, FlatList, RefreshControl } from 'react-native';
import moment from 'moment';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

//local import here
import styles from './Weather.styles';
import WeatherLogic from './Weather.logic';
import { COLORS, STYLES } from '../../configs';
import { Button, Header } from '../../components';
import { ArrowLeftIcon, ThermometerIcon, WindIcon } from '../../assets/svgs';

const WeatherScreen = () => {
  //logic value here
  const { data, actions } = WeatherLogic();

  //place your extension component here
  const _renderItemMenu = ({ item, index }) => {
    return (
      <View
        key={index + 1}
        style={[
          styles.wrapItem,
          { backgroundColor: actions._weatherColor(item.weather) },
        ]}
      >
        <View style={[styles.rightItem, STYLES.fx1]}>
          <Text style={styles.dayText}>
            {moment(item.date, 'YYYYMMDD').isSame(moment(), 'day')
              ? 'Today'
              : moment(item.date, 'YYYYMMDD').format('dddd')}
          </Text>
          <View style={STYLES.row}>
            <WindIcon width="20" height="20" fill={COLORS.black} />
            <Text style={[styles.infoText, STYLES.mrl4]}>
              {actions._windSpeed(item.wind10m_max)} m/s
            </Text>
          </View>
        </View>
        <View style={styles.centerItem}>
          <Image
            source={actions._weatherIcon(item.weather)}
            style={[styles.weatherIcon, STYLES.mrb12]}
            resizeMode="contain"
          />
          <Text style={styles.conditionText}>
            {actions._weatherName(item.weather)}
          </Text>
        </View>
        <View style={styles.leftItem}>
          <View style={STYLES.alItCenter}>
            <Text style={[styles.infoText, STYLES.mrb4]}>
              {item.temp2m.max}°C
            </Text>
            <ThermometerIcon width="30" height="30" fill={COLORS.black} />
            <Text style={[styles.infoText, STYLES.mrt4]}>
              {item.temp2m.min}°C
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const _renderLoading = () => {
    return (
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width="100%" padding={16} flexDirection="row">
          <SkeletonPlaceholder.Item
            alignSelf="stretch"
            justifyContent="space-between"
            flex={1}
          >
            <SkeletonPlaceholder.Item width={90} height={18} borderRadius={5} />
            <SkeletonPlaceholder.Item width={60} height={15} borderRadius={5} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item flex={1}>
            <SkeletonPlaceholder.Item
              width={100}
              height={100}
              borderRadius={50}
              marginBottom={10}
            />
            <SkeletonPlaceholder.Item
              width={100}
              height={20}
              borderRadius={5}
            />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            alignItems="flex-end"
            justifyContent="center"
            flex={1}
          >
            <SkeletonPlaceholder.Item alignItems="center">
              <SkeletonPlaceholder.Item
                width={20}
                height={15}
                borderRadius={5}
                marginBottom={5}
              />
              <SkeletonPlaceholder.Item
                width={10}
                height={50}
                borderRadius={5}
                marginBottom={5}
              />
              <SkeletonPlaceholder.Item
                width={20}
                height={15}
                borderRadius={5}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    );
  };

  return (
    <View style={styles.container}>
      <Header>
        <Button
          types="nude"
          onPress={actions.goBack}
          styleContainer={styles.backContainer}
          styleWrap={styles.backWrap}
        >
          <ArrowLeftIcon width="20" heigh="20" fill={COLORS.black} />
        </Button>
        <Text style={styles.headerTitle}>Jakarta - Indonesia</Text>
      </Header>
      <FlatList
        data={data.isLoading ? new Array(4) : data.data}
        extraData={data.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={data.isLoading ? _renderLoading : _renderItemMenu}
        refreshControl={
          <RefreshControl
            refreshing={data.isLoading}
            onRefresh={() => {
              actions._getWeather();
            }}
          />
        }
      />
    </View>
  );
};

export default WeatherScreen;
