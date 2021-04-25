//package import
import { Dimensions, StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_BODY3, FONT_HEADLINE_H4 } from '../../configs/fonts';

const SholatStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
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
  wrapTop: {
    position: 'relative',
  },
  containerTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.4)',
    zIndex: 1,
  },
  topText: {
    ...FONT_BODY3,
  },
  imageTop: {
    width: '100%',
    height: Dimensions.get('window').width * 0.6,
  },
  wrapList: {
    padding: 8,
    marginTop: -20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FFF',
    height: '100%',
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 5,
  },
  listActive: {
    backgroundColor: '#0ea7ff',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
  },
});

export default SholatStyles;
