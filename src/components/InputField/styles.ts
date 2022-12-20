import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const ICON_BOX_SIZE = 24;

export default StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        height: 56,
        justifyContent: 'flex-end',
      },
    }),
    position: 'relative',
  },
  labelContainer: {
    backgroundColor: '#E4EBF5',
    alignSelf: 'flex-start',
    paddingHorizontal: 3,
    marginStart: 20,
    zIndex: 1,
    elevation: 1,
    shadowColor: 'white',
    position: 'absolute',
    top: -6,
  },
  labelText: {
    color: COLORS.GREY_ALT,
    fontSize: 10,
  },
  labelHidden: {
    display: 'none',
  },
  textInput: {
    height: 48,
    color: COLORS.DARK,
    borderColor: COLORS.GREY,
    borderRadius: 24,
    borderWidth: 1,
    paddingLeft: 20,
    ...Platform.select({
      android: {
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 24,
      },
      ios: {
        fontSize: 17,
        borderBottomWidth: 1,
      },
    }),
  },
  clearButton: {
    width: ICON_BOX_SIZE,
    height: ICON_BOX_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 8,
  },
  eyeIcon: {
    width: ICON_BOX_SIZE,
    height: ICON_BOX_SIZE,
    position: 'absolute',
    right: 18,
    top: 11.5,
    justifyContent: 'center',
    ...Platform.select({
      android: {
        right: 26,
      },
    }),
  },
  error: {
    borderColor: COLORS.RED,
  },
  placeholderContainer: {
    paddingHorizontal: 4,
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    top: 0,
    left: 20,
  },
  placeholder: {
    color: COLORS.GREY_SEC,
    fontSize: 12,
  },
  errorPlaceholder: {
    color: COLORS.RED,
  },
  infoMessageContainer: {
    ...Platform.select({
      android: {
        marginLeft: 24,
      },
    }),
  },
  infoMessage: {
    ...Platform.select({
      android: {
        lineHeight: 18,
      },
    }),
  },
  errorInfoMessage: {
    color: COLORS.RED,
  },
});
