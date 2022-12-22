import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CustomHeader} from '../../components';
import {ROUTES} from '../../constants';
import {DashboardContainer} from '../../screens';
import TransactionsStackNavigator from './TransactionsStack';

const DashboardStack = createStackNavigator();

const DashboardStackNavigator: React.FC = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name={ROUTES.TABS.DASHBOARD}
        component={DashboardContainer}
        options={{
          header: () => {
            return <CustomHeader goBackButton title="Account" bellIcon />;
          },
        }}
      />
      <DashboardStack.Screen
        name="Transaction History"
        component={TransactionsStackNavigator}
        options={{headerShown: false}}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardStackNavigator;
