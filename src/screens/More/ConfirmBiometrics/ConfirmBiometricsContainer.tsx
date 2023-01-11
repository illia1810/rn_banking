import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import ConfirmBiometricsView from './ConfirmBiometricsView';
import {TBiometricsConfirmation} from '../../../types';

const ConfirmBiometricsContainer = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  const {params} = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    console.log(params);
  }, [params]);

  const onSubmit = (data: TBiometricsConfirmation) => {
    if (data.pinCode === '1111') {
      AsyncStorage.setItem('BiometricsForAuthentication', 'true');
      EncryptedStorage.setItem('PinForNirsal', data.pinCode);
      setShowSuccessModal(true);
    } else {
      setShowFailedModal(true);
    }
  };

  const goBack = () => navigation.goBack();

  const onSuccessModalClose = () => setShowSuccessModal(false);
  const onFailModalClose = () => setShowFailedModal(false);

  return (
    <ConfirmBiometricsView
      handleGoBack={goBack}
      onPinSubmit={onSubmit}
      isSuccessModalVisible={showSuccessModal}
      isFailModalVisable={showFailedModal}
      handleSuccessModalClose={onSuccessModalClose}
      handleFailModalClose={onFailModalClose}
    />
  );
};

export default ConfirmBiometricsContainer;
