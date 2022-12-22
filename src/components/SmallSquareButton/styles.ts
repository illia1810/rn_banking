import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY_BG,
    borderRadius: 10,
    paddingTop: 15,
    paddingVertical: 6,
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 75,
    height: 75,
  },
  textWrapper: {
    justifyContent: 'center',
    height: 40,
  },
  title: {
    fontSize: 12,
    color: COLORS.DARK,
    textAlign: 'center',
  },
});
