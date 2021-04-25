//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import {
  FONT_BODY1,
  FONT_BODY2,
  FONT_BODY5,
  FONT_HEADLINE_H1,
  FONT_HEADLINE_H4,
} from '../../configs/fonts';

const TodoStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
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
  bigText: {
    ...FONT_HEADLINE_H1,
  },
  wrapCard: {
    backgroundColor: COLORS.primaryWhite,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 16,
    padding: 16,
    borderRadius: 10,
  },
  smallText: {
    ...FONT_BODY5,
    color: COLORS.gray,
  },
  title: {
    ...FONT_HEADLINE_H4,
  },
  wrapIndicator: {
    width: '100%',
    height: 6,
    borderRadius: 5,
    backgroundColor: COLORS.black40,
    overflow: 'hidden',
  },
  indicator: {
    width: '0%',
    height: 6,
    backgroundColor: COLORS.yellow60,
  },
  wrapItem: {
    backgroundColor: COLORS.primaryWhite,
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    ...FONT_BODY2,
    flex: 1,
  },
  wrapCheck: { borderRadius: 25 / 2 },
  containerCheck: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderCheck: { borderWidth: 3, borderColor: COLORS.moonYellow },
  menuCheck: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapSave: { borderRadius: 60 / 2 },
  containerSave: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapBottom: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapInput: {
    backgroundColor: COLORS.primaryWhite,
    flex: 1,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 16,
    justifyContent: 'center',
    paddingHorizontal: 16,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textInput: {
    ...FONT_BODY1,
  },
  emptyList: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  wrapEmptyData: {
    alignItems: 'center',
  },
});

export default TodoStyles;
