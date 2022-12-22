import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ROUTES} from '../../constants';
import {PaymentContainer} from '../../screens';

const PaymentsStack = createStackNavigator();

const PaymentsStackNavigator: React.FC = () => {
  return (
    <PaymentsStack.Navigator>
      <PaymentsStack.Screen
        name={ROUTES.TABS.PAYMENTS}
        component={PaymentContainer}
        options={{headerShown: false}}
      />
    </PaymentsStack.Navigator>
  );
};

export default PaymentsStackNavigator;
