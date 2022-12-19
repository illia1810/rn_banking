import {useFlipper} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import {AuthenticationStack} from './stacks';

const RootNavigator: React.FC = () => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthenticationStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
