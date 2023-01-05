import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  largeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  absoluteContainer: {
    position: 'absolute',
    top: 66,
    left: 15,
  },
  topContainer: {
    backgroundColor: COLORS.GREEN,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  greenView: {
    position: 'relative',
    backgroundColor: COLORS.GREEN,
    height: 80,
  },
  textPrimaryTop: {
    fontSize: 12,
    color: COLORS.WHITE,
    marginBottom: 6,
  },
  textBoldTop: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontWeight: '600',
  },
  rightText: {
    textAlign: 'right',
  },
  horisontalListContainer: {
    marginTop: 90,
  },
  listTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  decreasedMarginBottom: {
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.DARK,
  },
  listButton: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.RED,
  },
  horisontalList: {
    paddingLeft: 15,
  },
  transactionsList: {
    padding: 0,
  },
  horisontalListItem: {
    marginRight: 33,
    alignItems: 'center',
  },
  verticalListContainer: {
    marginTop: 35,
    flex: 1,
  },
  greySquare: {
    marginBottom: 7,
  },
});
