//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_HEADLINE_H1, FONT_BODY1, FONT_BODY5 } from '../../configs/fonts';

const LoginPassStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
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
  buttonSignUp: {
    backgroundColor: COLORS.transparent,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
  },
  textBigTitle: {
    ...FONT_HEADLINE_H1,
    color: COLORS.primaryWhite,
    width: '100%',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 36,
  },
  textSubTitle: {
    ...FONT_BODY1,
    width: '100%',
    textAlign: 'center',
    color: COLORS.black60,
    paddingHorizontal: 18,
    marginBottom: 24,
  },
  wrapForm: {
    width: '100%',
    paddingHorizontal: 16,
  },
  styleBox: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonContainer: {
    borderRadius: 8,
  },
  wrapInfo: {
    width: '100%',
    alignItems: 'center',
    height: 80,
    flexDirection: 'row',
  },
  textDesc: {
    ...FONT_BODY1,
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.primaryWhite,
  },
  textSubDesc: {
    ...FONT_BODY5,
    textAlign: 'center',
    color: COLORS.black60,
  },
});

export default LoginPassStyles;
