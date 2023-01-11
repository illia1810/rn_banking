import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ROUTES} from '../../constants';
import {AirtimeContainer} from '../../screens';

const AirtimeStack = createStackNavigator();

const AirtimeStackNavigator: React.FC = () => {
  return (
    <AirtimeStack.Navigator>
      <AirtimeStack.Screen
        name={ROUTES.AIRTIME.MAIN}
        component={AirtimeContainer}
        options={{headerShown: false}}
      />
    </AirtimeStack.Navigator>
  );
};

export default AirtimeStackNavigator;
