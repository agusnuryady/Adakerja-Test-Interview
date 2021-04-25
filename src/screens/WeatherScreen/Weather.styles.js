//package import
import { StyleSheet } from 'react-native';

//local import
import { FONT_BODY2, FONT_BODY3, FONT_HEADLINE_H4 } from '../../configs/fonts';

const WeatherStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backWrap: {
    position: 'absolute',
    left: 0,
    borderRadius: 20,
    marginLeft: 4,
  },
  backContainer: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
  },
  wrapItem: {
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightItem: { justifyContent: 'space-between', alignSelf: 'stretch' },
  weatherIcon: { width: 100, height: 100 },
  dayText: {
    ...FONT_BODY2,
  },
  infoText: {
    ...FONT_BODY3,
  },
  conditionText: {
    ...FONT_HEADLINE_H4,
  },
  centerItem: {
    flex: 1,
    alignItems: 'center',
  },
  leftItem: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default WeatherStyles;
