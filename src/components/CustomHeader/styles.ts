import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.GREEN,
  },
  headerContainer: {
    backgroundColor: COLORS.GREEN,
    paddingVertical: 26,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: '600',
  },
});
