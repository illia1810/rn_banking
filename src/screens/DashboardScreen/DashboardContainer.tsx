import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import DashboardView from './DashboardView';

const DashboardContainer = () => {
  const {params} = useRoute();

  useFocusEffect(() => {
    console.log('Inner => ', params);
  });
  const showBiometricsAlert = () => {
    Alert.alert(
      `Do you want to turn on ${params?.availableBiometrics} for login?`,
      '',
      [
        {
          text: 'Yes',
          onPress: () => {
            EncryptedStorage.setItem('LoginForNirsal', params?.data.login);
            EncryptedStorage.setItem(
              'PasswordForNirsal',
              params?.data.password,
            );
            AsyncStorage.setItem('BiometricsForLogin', 'true');
          },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelled'),
        },
      ],
    );
  };

  useEffect(() => {
    AsyncStorage.getItem('BiometricsForLogin').then(val =>
      val === 'false' && params?.availableBiometrics
        ? showBiometricsAlert()
        : null,
    );
  });

  return <DashboardView />;
};

export default DashboardContainer;
