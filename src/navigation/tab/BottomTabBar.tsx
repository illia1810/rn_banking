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
  DebitCardGreen,
  DotsGreen,
  DotsGrey,
  MobileSmall,
  MobileSmallGreen,
  PersonActive,
  PersonInActive,
  TransferActive,
  TransferInActive,
} from '../../assets/svg';
import {useRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const {params} = useRoute();
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
              return focused ? <MobileSmallGreen /> : <MobileSmall />;
            case ROUTES.TABS.PAYMENTS:
              return focused ? <DebitCardGreen /> : <DebitCard />;
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
        options={{headerShown: false}}
        initialParams={params}
      />
      <Tab.Screen
        name={ROUTES.TABS.TRANSFERS}
        component={TransferStackNavigator}
        options={{headerShown: false, lazy: true}}
      />
      <Tab.Screen
        name={ROUTES.TABS.AIRTIME}
        component={AirtimeStackNavigator}
      />
      <Tab.Screen
        name={ROUTES.TABS.PAYMENTS}
        component={PaymentsStackNavigator}
      />
      <Tab.Screen
        name={ROUTES.TABS.MORE}
        component={MoreStackNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
