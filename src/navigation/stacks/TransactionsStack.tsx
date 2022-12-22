import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CustomHeader} from '../../components';
import {ROUTES} from '../../constants';
import {
  AllTransactionsContainer,
  MainTransactionHistoryContainer,
  MobileTransactionsContainer,
} from '../../screens';

const TransactionsStack = createStackNavigator();

const TransactionsStackNavigator: React.FC = () => {
  return (
    <TransactionsStack.Navigator>
      <TransactionsStack.Screen
        name={ROUTES.TRANSACTION_HISTORY.MAIN}
        component={MainTransactionHistoryContainer}
        options={{
          header: () => {
            return (
              <CustomHeader goBackButton title="Transaction History" bellIcon />
            );
          },
        }}
      />
      <TransactionsStack.Screen
        name={ROUTES.TRANSACTION_HISTORY.ALL}
        component={AllTransactionsContainer}
        options={{
          header: () => {
            return (
              <CustomHeader goBackButton title="Transaction History" bellIcon />
            );
          },
        }}
      />
      <TransactionsStack.Screen
        name={ROUTES.TRANSACTION_HISTORY.MOBILE}
        component={MobileTransactionsContainer}
        options={{
          header: () => {
            return (
              <CustomHeader goBackButton title="Transaction History" bellIcon />
            );
          },
        }}
      />
    </TransactionsStack.Navigator>
  );
};

export default TransactionsStackNavigator;
