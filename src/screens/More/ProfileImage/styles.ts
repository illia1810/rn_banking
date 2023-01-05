import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'center',
  },
  topTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.DARK,
    marginBottom: 15,
  },
  imageContainer: {
    width: 180,
    height: 180,
    borderRadius: 180,
  },
  mockupPhoto: {
    backgroundColor: COLORS.LIGHT_GREY_ALT,
    borderWidth: 1,
    borderColor: COLORS.GREY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallButtonsWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 37,
  },
  smallButtonContainer: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.GREEN,
    justifyContent: 'center',
    width: 103,
  },
  rightMargin: {
    marginRight: 20,
  },
  textInSmallButton: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.GREEN,
    textAlign: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.BLACK_SEC,
    marginBottom: 4,
  },
  userNameText: {
    fontSize: 12,
    color: COLORS.AURO_METAL,
  },
  largeButton: {
    borderRadius: 48,
  },
  largeButtonSec: {
    marginBottom: 20,
  },
});
