import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  contentContainer: {
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.LIGHT_GREY,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContainer: {
    paddingVertical: 13,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width - 13,
  },
  centalContent: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  dateText: {
    fontSize: 12,
    color: COLORS.GREY_SEC,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.DARK,
  },
  textAmmount: {
    fontSize: 12,
    fontWeight: '600',
    width: 106,
    textAlign: 'right',
  },
  textGreen: {
    color: COLORS.GREEN_SEC,
  },
  textRed: {
    color: COLORS.RED_SEC,
  },
  greenCorner: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: COLORS.LIGHT_GREEN,
    height: '100%',
    width: 2,
  },
});
