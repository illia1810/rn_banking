import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ROUTES} from '../../constants';
import AirtimeStackNavigator from '../stacks/AirtimeStack';
import {
  DashboardStackNavigator,
  MoreStackNavigator,
  PaymentsStackNavigator,
  TransferStackNavigator,
} from '../stacks';
import {
  DebitCard,
  DotsGreen,
  DotsGrey,
  MobileSmall,
  PersonActive,
  PersonInActive,
  TransferActive,
  TransferInActive,
} from '../../assets/svg';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case ROUTES.TABS.DASHBOARD:
              return focused ? <PersonActive /> : <PersonInActive />;
            case ROUTES.TABS.TRANSFERS:
              return focused ? <TransferActive /> : <TransferInActive />;
            case ROUTES.TABS.AIRTIME:
              return focused ? (
                <MobileSmall fill={COLORS.GREEN} />
              ) : (
                <MobileSmall />
              );
            case ROUTES.TABS.PAYMENTS:
              return focused ? (
                <DebitCard fill={COLORS.GREEN} />
              ) : (
                <DebitCard />
              );
            case ROUTES.TABS.MORE:
              return focused ? <DotsGreen /> : <DotsGrey />;
          }
        },
        tabBarActiveTintColor: COLORS.GREEN,
        tabBarInactiveTintColor: COLORS.DARK,
      })}>
      <Tab.Screen
        name={ROUTES.TABS.DASHBOARD}
        component={DashboardStackNavigator}
      />
      <Tab.Screen
        name={ROUTES.TABS.TRANSFERS}
        component={TransferStackNavigator}
      />
      <Tab.Screen
        name={ROUTES.TABS.AIRTIME}
        component={AirtimeStackNavigator}
      />
      <Tab.Screen
        name={ROUTES.TABS.PAYMENTS}
        component={PaymentsStackNavigator}
      />
      <Tab.Screen name={ROUTES.TABS.MORE} component={MoreStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
