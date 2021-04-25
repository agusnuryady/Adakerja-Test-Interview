//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_BODY2, FONT_BODY3, FONT_HEADLINE_H1 } from '../../configs/fonts';
import { widthByScreen } from '../../utils';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    flex: 1,
  },
  wrapHeader: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 30,
  },
  headerTitle: {
    ...FONT_HEADLINE_H1,
    textAlign: 'center',
  },
  headerDesc: {
    ...FONT_BODY3,
    textAlign: 'center',
  },
  rnLogo: {
    width: 100,
    height: 100,
  },
  menuWrap: {
    borderRadius: 10,
  },
  menuConten: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: widthByScreen(15),
    height: widthByScreen(15),
    borderRadius: widthByScreen(15) / 2,
    overflow: 'hidden',
    backgroundColor: COLORS.primaryWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {
    ...FONT_BODY2,
    color: COLORS.primaryWhite,
    textAlign: 'center',
  },
});

export default HomeStyles;
