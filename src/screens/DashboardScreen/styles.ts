import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 116,
  },
  slider: {
    zIndex: 999,
  },
  greenContainer: {
    backgroundColor: COLORS.GREEN,
    height: 40,
  },
  smallButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 36,
  },
  largeButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  moreText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 15,
  },
});
