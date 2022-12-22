import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.BLACK,
  },
  touchable: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1,
  },
  backgroundImage: {
    width: 194,
    height: 250,
    position: 'absolute',
    bottom: 60,
    left: Dimensions.get('window').width / 4 - 25,
  },
  list: {
    flexDirection: 'column',
    padding: 0,
  },
  listItem: {
    flexDirection: 'row',
    borderBottomColor: COLORS.LIGHT_PINK,
    borderBottomWidth: 1,
    padding: 17,
  },
  firstItem: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  greenText: {
    fontSize: 12,
    color: COLORS.GREEN,
    marginLeft: 15,
  },
  lastItem: {
    borderBottomColor: COLORS.TRANSPARENT,
  },
});
