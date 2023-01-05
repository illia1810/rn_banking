import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ROUTES} from '../../constants';
import TransfersMainView from './TransfersMainView';
import {Alert} from 'react-native';

const TransfersMainContainer = () => {
  const [imagePath, setImagePath] = useState('');
  const [effectUpdater, setEffectUpdater] = useState(0);
  const navigation = useNavigation();

  const goToAllTransactionsScreen = () =>
    navigation.navigate(ROUTES.TRANSACTION_HISTORY.ALL);

  const goToBMAScreen = () =>
    navigation.navigate(ROUTES.TRANSFERS.BETWEEN_ACCOUNTS_FIRST);

  useEffect(() => {
    AsyncStorage.getItem('ProfileImagePath')
      .then(val => (val ? setImagePath(val) : setImagePath('')))
      .catch(e => Alert.alert(e));
    let timer = setTimeout(
      () => setEffectUpdater(prevNum => (prevNum += 1)),
      1000,
    );
    return () => {
      clearTimeout(timer);
    };
  }, [effectUpdater]);

  return (
    <TransfersMainView
      onPressViewAllTransaction={goToAllTransactionsScreen}
      onPressBetweenMyAccounts={goToBMAScreen}
      profileImagePath={imagePath}
    />
  );
};

export default TransfersMainContainer;
