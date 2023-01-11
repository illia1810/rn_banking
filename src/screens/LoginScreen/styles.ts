import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  outerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  gradientWrapper: {
    height: '100%',
  },
  welcomeText: {
    alignItems: 'center',
    marginBottom: 38,
  },
  textBold: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 9,
  },
  textStandard: {
    fontSize: 12,
  },
  container: {
    paddingHorizontal: 15,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 36,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    marginBottom: 37,
    position: 'relative',
  },
  rememberButton: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  greyText: {
    fontSize: 12,
    color: COLORS.GREY_SEC,
    marginRight: 10,
  },
  link: {
    fontSize: 12,
    color: COLORS.MARINE_BLUE,
    fontWeight: '600',
  },
  rememberContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  loginButton: {
    borderRadius: 130,
  },
  fixedButtonWidth: {
    maxWidth: 285,
  },
  biometricButton: {
    maxWidth: 50,
    maxHeight: 50,
    paddingTop: 0,
    borderRadius: 25,
  },
  centeredText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkGreyText: {
    fontSize: 12,
    color: COLORS.DARK_GREY,
    fontWeight: '600',
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRightColor: COLORS.LIGHT_GREY,
    borderRightWidth: 1,
  },
  bottomButtonNoBorder: {
    borderRightColor: 'transparent',
  },
  blueText: {
    color: COLORS.MARINE_BLUE,
    fontSize: 12,
    marginLeft: 8,
  },
  whiteText: {
    color: COLORS.WHITE,
    zIndex: 999,
  },
  modal: {
    position: 'absolute',
    top: 20,
    right: 30,
  },
});
