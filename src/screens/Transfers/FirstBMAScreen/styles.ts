import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  topHeader: {
    marginTop: 30,
    marginBottom: 35,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.DARK,
  },
  dropdown: {
    marginBottom: 35,
  },
  switchContainer: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondaryText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.DARK,
  },
  input: {
    paddingVertical: 12,
    borderColor: COLORS.GREY,
    marginBottom: 35,
  },
  inputRemark: {
    height: 110,
    paddingTop: 12,
  },
  greyLine: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.GREY_SEC,
    opacity: 0.4,
  },
  datePickerSec: {
    marginBottom: 30,
  },
  primaryButton: {
    borderRadius: 150,
    marginTop: 28,
    marginBottom: 26,
  },
  backButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.GREY_TEXT_SEC,
    marginBottom: 25,
  },
  paginationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    marginRight: 8,
  },
  inactiveScreenIndicator: {
    height: 2,
    width: 9,
    borderRadius: 5,
    backgroundColor: COLORS.GREY_SEC,
    opacity: 0.2,
  },
});
