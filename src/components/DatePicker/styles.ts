import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    margin: 20,
    padding: 15,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInButton: {
    fontSize: 16,
    fontWeight: '600',
  },
  redText: {
    color: COLORS.RED,
  },
  blueText: {
    color: COLORS.MARINE_BLUE,
  },
});
