import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ROUTES} from '../../constants';
import TransfersMainView from './TransfersMainView';

const TransfersMainContainer = () => {
  const navigation = useNavigation();

  const goToAllTransactionsScreen = () =>
    navigation.navigate(ROUTES.TRANSACTION_HISTORY.ALL);

  const goToBMAScreen = () =>
    navigation.navigate(ROUTES.TRANSFERS.BETWEEN_ACCOUNTS_FIRST);

  return (
    <TransfersMainView
      onPressViewAllTransaction={goToAllTransactionsScreen}
      onPressBetweenMyAccounts={goToBMAScreen}
    />
  );
};

export default TransfersMainContainer;
