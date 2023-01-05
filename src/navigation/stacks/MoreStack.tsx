import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CustomHeader} from '../../components';
import {ROUTES} from '../../constants';
import {
  ManageBiometricsContainer,
  MoreContainer,
  ProfileImageContainer,
} from '../../screens';

const MoreStack = createStackNavigator();

const MoreStackNavigator: React.FC = () => {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name={ROUTES.MORE.MAIN}
        component={MoreContainer}
        options={{headerShown: false}}
      />
      <MoreStack.Screen
        name={ROUTES.MORE.MANAGE_BIOMETRICS}
        component={ManageBiometricsContainer}
        options={{
          header: () => {
            return (
              <CustomHeader goBackButton title="Manage Biometrics" bellIcon />
            );
          },
        }}
      />
      <MoreStack.Screen
        name={ROUTES.MORE.PROFILE_IMAGE}
        component={ProfileImageContainer}
        options={{
          header: () => {
            return <CustomHeader goBackButton title="Profile Image" />;
          },
        }}
      />
    </MoreStack.Navigator>
  );
};

export default MoreStackNavigator;
