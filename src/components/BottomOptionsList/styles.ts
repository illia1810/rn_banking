import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  topLabel: {
    backgroundColor: COLORS.GREY,
    paddingVertical: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 24,
  },
  topLabelText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  closeButton: {
    position: 'absolute',
    top: 14,
    right: 10,
  },
  accountOptionContainer: {
    paddingVertical: 13,
    paddingLeft: 15,
    borderBottomColor: COLORS.GREY,
    borderBottomWidth: 1,
  },
  accountOptionText: {
    fontSize: 12,
    color: COLORS.DARK,
  },
});
