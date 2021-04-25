//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_BODY1, FONT_BODY3 } from '../../configs/fonts';

export default StyleSheet.create({
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  wrapInput: {
    width: '100%',
  },
  textLabel: {
    ...FONT_BODY3,
    lineHeight: 16,
    color: COLORS.primaryBlack,
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  wrapError: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textError: {
    ...FONT_BODY3,
    lineHeight: 16,
    color: COLORS.red60,
    marginTop: 8,
  },
  textLength: {
    ...FONT_BODY3,
    lineHeight: 16,
    color: COLORS.black70,
    marginTop: 8,
  },
  boxInput: {
    width: '100%',
    backgroundColor: COLORS.primaryWhite,
    padding: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.black60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapBoxInputDropdown: {
    width: '100%',
    borderRadius: 4,
  },
  boxInputDropdown: {
    width: '100%',
    padding: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.black60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxInputTextArea: {
    width: '100%',
    minHeight: 108,
    padding: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.black50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  boxInputButton: {
    width: '100%',
    backgroundColor: COLORS.primaryWhite,
    padding: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxError: {
    borderColor: COLORS.red60,
  },
  textInput: {
    ...FONT_BODY1,
    lineHeight: 19,
    color: COLORS.primaryBlack,
    flex: 1,
    padding: 0,
  },
  wrapButtonEye: {
    width: 30,
    borderRadius: 30 / 2,
  },
  containerButtonEye: {
    width: '100%',
    height: 30,
    borderRadius: 30 / 2,
    padding: 0,
  },
  wrapInputButton: {
    width: 90,
    borderRadius: 4,
  },
  containerInputButton: {
    width: '100%',
    borderRadius: 4,
    padding: 12,
  },
});
