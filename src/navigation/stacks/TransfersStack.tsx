import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ROUTES} from '../../constants';
import {TransfersMainContainer} from '../../screens';

const TransferStack = createStackNavigator();

const TransferStackNavigator: React.FC = () => {
  return (
    <TransferStack.Navigator>
      <TransferStack.Screen
        name={ROUTES.TABS.TRANSFERS}
        component={TransfersMainContainer}
        options={{headerShown: false}}
      />
    </TransferStack.Navigator>
  );
};

export default TransferStackNavigator;
