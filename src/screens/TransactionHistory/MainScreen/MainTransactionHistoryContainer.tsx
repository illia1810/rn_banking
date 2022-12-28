import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ROUTES} from '../../../constants';
import MainTransactionHistoryView from './MainTransactionHistoryView';

const MainTransactionHistoryContainer = () => {
  const navigation = useNavigation();
  const goToAllTransactionsScreen = () => {
    navigation.navigate(ROUTES.TRANSACTION_HISTORY.ALL);
  };
  const goToMobileTransactionsScreen = () => {
    navigation.navigate(ROUTES.TRANSACTION_HISTORY.MOBILE);
  };

  return (
    <MainTransactionHistoryView
      onPressAllTransactions={goToAllTransactionsScreen}
      onPressMobileTransactions={goToMobileTransactionsScreen}
    />
  );
};

export default MainTransactionHistoryContainer;
