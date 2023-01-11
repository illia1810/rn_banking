import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import {ROUTES} from '../../../constants';
import ManageBiometricsView from './ManageBiometricsView';

const ManageBiometricsContainer = () => {
  const [switchLoginValue, setSwitchLoginValue] = useState(false);
  const [switchAuthValue, setSwitchAuthValue] = useState(false);

  const navigation = useNavigation();

  useFocusEffect(() => {
    AsyncStorage.getItem('BiometricsForLogin').then(val =>
      val === 'true' ? setSwitchLoginValue(true) : setSwitchLoginValue(false),
    );
    AsyncStorage.getItem('BiometricsForAuthentication').then(val =>
      val === 'true' ? setSwitchAuthValue(true) : setSwitchAuthValue(false),
    );
  });

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, switchLoginValue, switchAuthValue]);

  const rnBiometrics = new ReactNativeBiometrics();

  const handlePressLoginBiometrics = () => {
    if (switchLoginValue) {
      Alert.alert('Are you sure to disable biometrics for login', '', [
        {
          text: 'Yes',
          onPress: () => {
            AsyncStorage.setItem('BiometricsForLogin', 'false');
            setSwitchLoginValue(false);
          },
        },
        {
          text: 'Cancel',
        },
      ]);
    } else {
      Alert.alert(
        'Please go to login page and enter credentials to setup biometrics for login',
        '',
        [
          {
            text: 'Okay',
          },
        ],
      );
    }
  };

  const handlePressAuthBiometrics = () => {
    if (switchAuthValue) {
      Alert.alert('Are you sure to disable biometrics for authentication', '', [
        {
          text: 'Yes',
          onPress: () => {
            AsyncStorage.setItem('BiometricsForAuthentication', 'false');
            setSwitchAuthValue(false);
          },
        },
        {
          text: 'Cancel',
        },
      ]);
    } else {
      rnBiometrics
        .isSensorAvailable()
        .then(resultObject => {
          const {available} = resultObject;
          if (available) {
            navigation.navigate(ROUTES.MORE.BIOMETRICS_CONFIRMATION, {type: 'auth'});
          } else {
            Alert.alert('Biometrics not available on your device', '', [
              {
                text: 'Cancel',
              },
            ]);
          }
        })
        .catch(e => Alert.alert(String(e)));
    }
  };

  return (
    <ManageBiometricsView
      loginValue={switchLoginValue}
      onActivateLoginBiometrics={handlePressLoginBiometrics}
      authValue={switchAuthValue}
      onActivateAuthBiometrics={handlePressAuthBiometrics}
    />
  );
};

export default ManageBiometricsContainer;
