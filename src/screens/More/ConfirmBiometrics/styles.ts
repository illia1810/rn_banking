import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 30,
    justifyContent: 'space-between',
  },
  topTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.DARK,
    textAlign: 'center',
  },
  pinContainer: {
    alignItems: 'center',
  },
  pinLabel: {
    fontSize: 12,
    color: COLORS.GREY_SEC,
  },
  cellDefault: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GREY_ALT,
  },
  cellWithError: {
    borderBottomColor: COLORS.RED,
  },
  cellFocused: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BLACK,
  },
  buttonsWrapper: {},
  button: {
    borderRadius: 150,
  },
  primaryButton: {
    marginBottom: 30,
  },
});
