import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 20,
    borderRadius: 10,
    marginHorizontal: 4,
    width: 110,
    height: 110,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    maxWidth: 74,
    marginTop: 10,
  },
});
