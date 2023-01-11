import {useNavigation, useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ROUTES} from '../../constants';
import TransfersMainView from './TransfersMainView';
import {Alert} from 'react-native';

const TransfersMainContainer = () => {
  const [imagePath, setImagePath] = useState('');
  const navigation = useNavigation();

  const goToAllTransactionsScreen = () =>
    navigation.navigate(ROUTES.TRANSACTION_HISTORY.ALL);

  const goToBMAScreen = () =>
    navigation.navigate(ROUTES.TRANSFERS.BETWEEN_ACCOUNTS_FIRST);

  useFocusEffect(() => {
    AsyncStorage.getItem('ProfileImagePath')
      .then(val => (val ? setImagePath(val) : setImagePath('')))
      .catch(e => Alert.alert(e));
  });

  return (
    <TransfersMainView
      onPressViewAllTransaction={goToAllTransactionsScreen}
      onPressBetweenMyAccounts={goToBMAScreen}
      profileImagePath={imagePath}
    />
  );
};

export default TransfersMainContainer;
