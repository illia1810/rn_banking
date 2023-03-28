import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  dropDownWrapper: {
    borderWidth: 1,
    borderColor: COLORS.GREY,
    borderRadius: 24,
    paddingVertical: 13,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLabel: {
    position: 'absolute',
    top: -6,
    left: 16,
    backgroundColor: COLORS.WHITE,
  },
  topLabelText: {
    fontSize: 10,
    color: COLORS.GREY_SEC,
  },
  textInDropdown: {
    fontSize: 12,
    color: COLORS.GREY_SEC,
  },
  optionContainer: {
    paddingVertical: 13,
    borderBottomColor: COLORS.GREY,
    borderBottomWidth: 1,
  },
  listWrapper: {
    paddingHorizontal: 16,
    position: 'absolute',
    top: 42,
  },
  iconInactive: {
    transform: [{rotate: '180deg'}],
  },
});
