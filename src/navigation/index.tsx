import {useFlipper} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AuthenticationStack} from './stacks';
import BottomTabBar from './tab/BottomTabBar';

const RootStack = createStackNavigator();

const RootNavigator: React.FC = () => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen
          name="LoginPage"
          component={AuthenticationStack}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="App"
          component={BottomTabBar}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
