import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY_BG,
    padding: 16,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2 - 25,
    marginBottom: 17,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    maxWidth: 90,
    marginTop: 10,
  },
});
