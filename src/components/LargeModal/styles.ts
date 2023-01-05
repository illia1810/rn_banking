import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const modalWidth = Dimensions.get('screen').width - 30;

export default StyleSheet.create({
  touchable: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: modalWidth,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.DARK,
    marginTop: 30,
  },
  subText: {
    fontSize: 14,
    color: COLORS.DARK,
    marginTop: 15,
  },
  primaryButton: {
    marginTop: 40,
    borderRadius: 150,
  },
  secondaryButton: {
    marginTop: 20,
    borderRadius: 150,
  },
});
