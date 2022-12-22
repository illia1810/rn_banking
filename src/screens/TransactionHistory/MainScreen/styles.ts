import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_BLUE,
    paddingHorizontal: 15,
  },
  topText: {
    marginVertical: 30,
    textAlign: 'center',
  },
  boldText: {
    fontSize: 16,
    fontWeight: '600',
  },
  bigButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  buttonText: {
    width: 240,
    marginLeft: 20,
  },
});
