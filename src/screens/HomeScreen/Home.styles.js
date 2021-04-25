//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_BODY2, FONT_BODY3, FONT_HEADLINE_H4 } from '../../configs/fonts';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  imageLogo: {
    width: 35,
    height: 35,
  },
  buttonSignOut: {
    backgroundColor: COLORS.transparent,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  textName: {
    ...FONT_BODY2,
    color: COLORS.primaryWhite,
    marginLeft: 8,
    width: 100,
  },
  wrapInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black50,
  },
  wrapSearch: {
    width: '75%',
  },
  boxSearch: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonSearch: {
    paddingVertical: 12,
  },
  wrapItem: {
    borderRadius: 0,
    padding: 0,
    paddingHorizontal: 16,
  },
  contentItem: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 28,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black50,
  },
  titleItem: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlue,
    lineHeight: 18,
  },
  tagWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  tagBox: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: COLORS.blue10,
    borderRadius: 50,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  tagText: {
    ...FONT_BODY2,
    color: COLORS.primaryBlue,
  },
  infoText: {
    ...FONT_BODY3,
    color: COLORS.black70,
  },
  pinCircle: {
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    borderWidth: 1,
    borderColor: COLORS.black40,
  },
  containerModal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapModal: {
    width: 300,
    paddingVertical: 16,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 5,
  },
  textCancel: {
    color: COLORS.black80,
    textTransform: 'capitalize',
  },
  wrapButton: {
    width: '100%',
    flex: 1,
  },
});

export default HomeStyles;
