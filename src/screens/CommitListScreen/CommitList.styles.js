//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import {
  FONT_BODY2,
  FONT_BODY3,
  FONT_BODY4,
  FONT_BODY5,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H5,
} from '../../configs/fonts';

const CommitListStyles = StyleSheet.create({
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
  wrapRepo: {
    width: '100%',
    backgroundColor: COLORS.black30,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.41,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  titleItem: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlue,
    lineHeight: 18,
  },
  descItem: {
    ...FONT_BODY3,
    color: COLORS.primaryBlack,
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
  imageEmpty: {
    width: 220,
    height: 160,
  },
  wrapBranch: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 28,
    paddingBottom: 16,
    flexDirection: 'row',
  },
  wrapDropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: COLORS.black30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.black50,
  },
  textDropDown: {
    ...FONT_BODY2,
    color: COLORS.black,
  },
  wrapSectHead: {
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryWhite,
  },
  wrapLineHead: {
    width: 30,
    height: 40,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineHead: {
    width: 2,
    height: '100%',
    backgroundColor: COLORS.black50,
    position: 'absolute',
  },
  wrapIcon: {
    zIndex: 9,
    backgroundColor: COLORS.primaryWhite,
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
  },
  textSeactHead: {
    ...FONT_BODY2,
    color: COLORS.black70,
  },
  wrapItem: {
    padding: 16,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.black50,
  },
  wrapFirstItem: {
    borderTopWidth: 1,
    borderColor: COLORS.black50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  wrapLastItem: {
    borderBottomWidth: 1,
    borderColor: COLORS.black50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  itemBotomBorder: {
    borderBottomWidth: 1,
  },
  titleText: {
    ...FONT_HEADLINE_H5,
    color: COLORS.primaryBlack,
  },
  moreText: {
    backgroundColor: COLORS.black40,
    padding: 4,
  },
  wrapAvatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.primaryWhite,
    backgroundColor: COLORS.black40,
  },
  imageAvatar: { width: 25, height: 25, borderRadius: 25 / 2 },
  pinCircle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: COLORS.yellow60,
  },
  textUser: {
    ...FONT_BODY4,
    color: COLORS.primaryBlack,
  },
  smallText: {
    ...FONT_BODY5,
    color: COLORS.black80,
  },
  leftSlick: {
    marginLeft: -12,
  },
  wrapLoadingLoadMore: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CommitListStyles;
