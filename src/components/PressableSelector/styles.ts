import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    borderColor: COLORS.GREY,
    borderWidth: 1,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    paddingLeft: 12,
    paddingRight: 16,
    width: '100%',
  },
  containerWithError: {
    borderColor: COLORS.RED,
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
  textInSelector: {
    color: COLORS.GREY_SEC,
    fontSize: 12,
  },
});
