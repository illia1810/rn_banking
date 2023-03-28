import { useFocusEffect, useRoute } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CustomHeader} from '../../components';
import {ROUTES} from '../../constants';
import {DashboardContainer} from '../../screens';
import TransactionsStackNavigator from './TransactionsStack';

const DashboardStack = createStackNavigator();

const DashboardStackNavigator: React.FC = () => {
  const {params} = useRoute();
  useFocusEffect(() => console.log(params?.params));
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name={ROUTES.DASHBOARD.MAIN}
        component={DashboardContainer}
        options={{
          header: () => {
            return <CustomHeader goBackButton title="Account" bellIcon />;
          },
        }}
        initialParams={params}
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
