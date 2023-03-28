import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    paddingVertical: 13,
  },
  primary: {
    backgroundColor: COLORS.GREEN,
  },
  primaryDisabled: {
    backgroundColor: COLORS.LIGHT_GREEN,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.AURO_METAL,
  },
  ghostDisabled: {
    borderColor: COLORS.GREY,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  primaryText: {
    color: COLORS.WHITE,
  },
  ghostText: {
    color: COLORS.AURO_METAL,
  },
});
