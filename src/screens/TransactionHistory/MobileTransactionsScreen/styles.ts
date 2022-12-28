import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const widthFilter = Dimensions.get('window').width / 2 - 28;

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  routeContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  sheetWrapper: {
    paddingHorizontal: 16,
  },
  tabBar: {
    backgroundColor: COLORS.WHITE,
  },
  tabBarText: {
    color: COLORS.MARINE_BLUE,
    fontSize: 12,
    fontWeight: '600',
  },
  tabBarTextInactive: {
    color: COLORS.DARK,
    fontSize: 12,
    fontWeight: '600',
  },
  indicatorStyle: {
    backgroundColor: COLORS.MARINE_BLUE,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
    paddingTop: 24,
  },
  dropdownFilter: {
    borderColor: COLORS.GREY,
    borderWidth: 1,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    paddingLeft: 12,
    paddingRight: 16,
    width: widthFilter,
  },
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
  buttonInSheet: {
    marginBottom: 20,
    borderRadius: 48,
  },
  datePicker: {
    marginBottom: 30,
  },
  datePickerButton: {
    borderColor: COLORS.GREY,
    borderWidth: 1,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    paddingLeft: 12,
    paddingRight: 16,
    minWidth: widthFilter,
  },
  pickerText: {
    color: COLORS.GREY_SEC,
    fontSize: 12,
  },
  topDateLabel: {
    position: 'absolute',
    top: -6,
    left: 16,
    backgroundColor: COLORS.WHITE,
  },
  topDateLabelText: {
    fontSize: 10,
    color: COLORS.GREY_SEC,
  },
  hiddenCantainer: {
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: '100%',
    width: 70,
  },
  hiddenText: {
    color: COLORS.WHITE,
    fontSize: 10,
  },
});
