import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ROUTES} from '../../constants';
import {MoreContainer} from '../../screens';

const MoreStack = createStackNavigator();

const MoreStackNavigator: React.FC = () => {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name={ROUTES.TABS.MORE}
        component={MoreContainer}
        options={{headerShown: false}}
      />
    </MoreStack.Navigator>
  );
};

export default MoreStackNavigator;
