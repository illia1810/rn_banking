import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
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
    maxWidth: 285,
    borderRadius: 130,
  },
  biometricButton: {
    maxWidth: 50,
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
});
