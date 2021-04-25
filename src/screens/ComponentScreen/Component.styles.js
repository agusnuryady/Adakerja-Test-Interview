//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS, STYLES } from '../../configs';
import { FONT_BODY1, FONT_HEADLINE_H4 } from '../../configs/fonts';

const ComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  title: {
    ...FONT_HEADLINE_H4,
    color: COLORS.black,
    marginBottom: 16,
  },
  content: {
    ...STYLES.pd12,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: COLORS.primaryWhite,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3,
    marginVertical: 16,
  },
  button: {
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  border: {
    borderBottomColor: COLORS.black,
    borderBottomWidth: 0.5,
  },
  text: {
    ...FONT_BODY1,
    color: COLORS.black,
  },
  wrapIcon: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  borderColor: {
    borderColor: COLORS.green80,
    borderWidth: 1,
  },
});

export default ComponentStyles;
