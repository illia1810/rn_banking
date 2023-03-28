import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    paddingTop: 14,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  textWrapper: {
    maxWidth: 185,
  },
  typeTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.DARK,
  },
  typeDescription: {
    fontSize: 12,
    color: COLORS.GREY_SEC,
    marginTop: 6,
  },
});
