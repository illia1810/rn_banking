import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  wrapper: {
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
  inputText: {
    color: COLORS.GREY_SEC,
    fontSize: 12,
  },
});
