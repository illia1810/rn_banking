import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  topContainer: {
    padding: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.DARK,
  },
  optionContainer: {
    paddingVertical: 19,
    paddingHorizontal: 40,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.DARK,
  },
});
