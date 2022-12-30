import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CustomHeader} from '../../components';
import {ROUTES} from '../../constants';
import {
  FirstBMAContainer,
  SecondBMAContainer,
  TransfersMainContainer,
} from '../../screens';

const TransferStack = createStackNavigator();

const TransferStackNavigator: React.FC = () => {
  return (
    <TransferStack.Navigator>
      <TransferStack.Screen
        name={ROUTES.TRANSFERS.MAIN}
        component={TransfersMainContainer}
        options={{
          header: () => {
            return <CustomHeader title="Transfers" bellIcon />;
          },
        }}
      />
      <TransferStack.Screen
        name={ROUTES.TRANSFERS.BETWEEN_ACCOUNTS_FIRST}
        component={FirstBMAContainer}
        options={{
          header: () => {
            return (
              <CustomHeader goBackButton title="Between My Accounts" bellIcon />
            );
          },
        }}
      />
      <TransferStack.Screen
        name={ROUTES.TRANSFERS.BETWEEN_ACCOUNTS_SECOND}
        component={SecondBMAContainer}
        options={{
          header: () => {
            return (
              <CustomHeader goBackButton title="Between My Accounts" bellIcon />
            );
          },
        }}
      />
    </TransferStack.Navigator>
  );
};

export default TransferStackNavigator;
