import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ROUTES} from '../../constants';
import {LoginScreen} from '../../screens';
import {AuthenticationStackParamList} from '../../types';

const AuthStack = createStackNavigator<AuthenticationStackParamList>();

const AuthenticationStack: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName={ROUTES.AUTHENTICATION.LOGIN_SCREEN}>
      <AuthStack.Screen
        name={ROUTES.AUTHENTICATION.LOGIN_SCREEN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthenticationStack;
