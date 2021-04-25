//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_BODY2, FONT_BODY3, FONT_HEADLINE_H4 } from '../../configs/fonts';

const RegisterStyles = StyleSheet.create({
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
  content: {
    padding: 16,
  },
  textTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.black90,
  },
  textDesc: {
    ...FONT_BODY3,
    color: COLORS.black90,
  },
  textBlur: {
    ...FONT_BODY3,
    color: COLORS.black70,
  },
  textLink: {
    ...FONT_BODY3,
    color: COLORS.primaryBlue,
  },
  wrapCenter: {
    width: '100%',
    alignItems: 'center',
  },
  wrapButton: {
    width: '48%',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textButton: {
    ...FONT_BODY2,
    color: COLORS.primaryWhite,
  },
});

export default RegisterStyles;
