import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_BLUE,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  topHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.DARK,
    textAlign: 'center',
    marginVertical: 35,
  },
  receiptContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    paddingTop: 30,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.05,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    marginBottom: 47,
  },
  ammountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 22,
    borderBottomColor: COLORS.LIGHT_BLUE,
    borderBottomWidth: 2,
  },
  descriptionPrimary: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: COLORS.GREY_SEC,
    marginBottom: 4,
  },
  infoAmmount: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.DARK,
  },
  receiptInfo: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderBottomColor: COLORS.LIGHT_BLUE,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  receiptInfoLast: {
    borderBottomWidth: 0,
  },
  descriptionSecondary: {
    fontSize: 14,
    color: COLORS.GREY_SEC,
  },
  infoExtra: {
    fontSize: 14,
    color: COLORS.DARK,
    fontWeight: '600',
  },
  paginationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  paginationText: {
    fontSize: 12,
    color: COLORS.GREY_SEC,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  activeScreenIndicator: {
    height: 2,
    width: 15,
    borderRadius: 5,
    backgroundColor: COLORS.MARINE_BLUE,
  },
  inactiveScreenIndicator: {
    height: 2,
    width: 9,
    borderRadius: 5,
    backgroundColor: COLORS.GREY_SEC,
    opacity: 0.2,
    marginRight: 8,
  },
  containerWithSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 46,
    marginBottom: 43,
  },
  switchTitle: {
    fontSize: 14,
    color: COLORS.GREY_SEC,
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  loginButton: {
    maxWidth: 300,
    borderRadius: 150,
  },
  biometricButton: {
    maxWidth: 50,
    maxHeight: 50,
    paddingTop: 0,
    borderRadius: 25,
  },
  goBackButton: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.GREY_SEC,
  },
  textPin: {
    fontSize: 32,
    color: COLORS.DARK,
  },
  inputContainer: {
    alignSelf: 'center',
  },
  cellDefault: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GREY_ALT,
  },
  cellWithError: {
    borderBottomColor: COLORS.RED,
  },
  cellFocused: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BLACK,
  },
  pinTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinTitle: {
    fontSize: 12,
    color: COLORS.GREY_SEC,
    textAlign: 'center',
    maxWidth: 60,
  },
});
