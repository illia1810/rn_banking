import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import React, {useEffect, useState} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import SecondBMAView from './SecondBMAView';
import {Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TTransferConfirmation} from '../../../types';
import {ROUTES} from '../../../constants';

const SecondBMAContainer = () => {
  const [isBiometricsAvailable, setIsBiometricsAvailable] = useState(false);
  const [savingBeneficiary, setSavingBeneficiary] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pinFromStore, setPinFromStore] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('BiometricsForAuthentication').then(val =>
      val === 'true'
        ? setIsBiometricsAvailable(true)
        : setIsBiometricsAvailable(false),
    );
  });
  const navigation = useNavigation();
  const {params} = useRoute();
  const {data} = params;

  const rnBiometrics = new ReactNativeBiometrics();

  const handlePressBiometricsConfirmation = () => {
    if (isBiometricsAvailable) {
      rnBiometrics
        .simplePrompt({promptMessage: 'Use biometrics'})
        .then(async resultObject => {
          const {success} = resultObject;
          if (success) {
            EncryptedStorage.getItem('PinForNirsal').then(val =>
              val ? setPinFromStore(val) : null,
            );
            setShowModal(true);
          } else {
            Alert.alert('Oopps, something went wrong', '', [
              {
                text: 'OK',
              },
            ]);
          }
        });
    } else {
      Alert.alert("You didn't setup biometrics", '', [
        {
          text: 'OK',
        },
      ]);
    }
  };

  const onSubmit = (dataFromInput: TTransferConfirmation) => {
    if (dataFromInput.pinCode === '1111') {
      setShowModal(true);
    } else {
      Alert.alert('Wrong PIN', '', [
        {
          text: 'Try again',
        },
      ]);
    }
  };
  const goBack = () => navigation.goBack();
  const closeModal = () => setShowModal(false);
  const handlePressSavingBeneficiary = () =>
    setSavingBeneficiary(!savingBeneficiary);
  const handlePressSuccessTransfer = () => {
    setShowModal(false);
    navigation.navigate(ROUTES.TRANSFERS.MAIN);
  };

  return (
    <SecondBMAView
      dataForTransfer={data}
      onBiometricsConfirmation={handlePressBiometricsConfirmation}
      onTransferSubmit={onSubmit}
      isSavingBeneficiary={savingBeneficiary}
      showModal={showModal}
      onGoBack={goBack}
      onCloseModal={closeModal}
      onSavingBeneficiaryChange={handlePressSavingBeneficiary}
      onSuccessTransfer={handlePressSuccessTransfer}
      pinCodeFromStorage={pinFromStore}
    />
  );
};

export default SecondBMAContainer;
