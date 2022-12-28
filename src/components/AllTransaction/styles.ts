import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 15,
    marginBottom: 15,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  centalContent: {
    width: 180,
    marginLeft: 10,
  },
  title: {
    fontSize: 12,
    color: COLORS.DARK,
  },
  dateText: {
    fontSize: 10,
    color: COLORS.GREY_SEC,
  },
  textAmmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  textGreen: {
    color: COLORS.GREEN_SEC,
  },
  textRed: {
    color: COLORS.RED_ALT,
  },
});
