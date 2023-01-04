import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Alert,
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import * as yup from 'yup';
import {FingerPrint, LikeIcon} from '../../../assets/svg';
import {LargeModal, SwitchButton} from '../../../components';
import CustomButton from '../../../components/CustomButton';
import {TTransferConfirmation} from '../../../types';
import styles from './styles';

const defaultValues = {
  pinCode: '',
};

const regularTransferConfirmSchema = yup
  .object({
    pinCode: yup
      .string()
      .required('This field is required')
      .matches(/^[0-9]{4}$/, 'Pincode should contains only numbers'),
  })
  .required();

const SecondBMAView = () => {
  const [savingBeneficiary, setSavingBeneficiary] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const {params} = useRoute();
  const {data} = params;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TTransferConfirmation>({
    defaultValues: defaultValues,
    resolver: yupResolver(regularTransferConfirmSchema),
  });

  const handleGoBack = () => navigation.goBack();
  const closeModal = () => setShowModal(false);
  const onSubmit = (dataFromInput: TTransferConfirmation) => {
    if (errors.pinCode?.message) {
      Alert.alert('Please enter PIN', '', [
        {
          text: 'Okay',
        },
      ]);
    }
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

  return (
    <SafeAreaView edges={['right', 'left', 'bottom']} style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View>
            <Text style={styles.topHeader}>Confirm Transfer</Text>
            <View style={styles.receiptContainer}>
              <View style={styles.ammountContainer}>
                <Text style={styles.descriptionPrimary}>Ammount</Text>
                <Text style={styles.infoAmmount}>{data.ammount}</Text>
              </View>
              <View style={styles.receiptInfo}>
                <Text style={styles.descriptionSecondary}>From Account:</Text>
                <Text style={styles.infoExtra}>{data.sourceAcc}</Text>
              </View>
              <View style={styles.receiptInfo}>
                <Text style={styles.descriptionSecondary}>
                  Destination Account:
                </Text>
                <Text style={styles.infoExtra}>{data.destinationAcc}</Text>
              </View>
              <View style={[styles.receiptInfo, styles.receiptInfoLast]}>
                <Text style={styles.descriptionSecondary}>Remark:</Text>
                <Text style={styles.infoExtra}>{data.remark}</Text>
              </View>
            </View>
            <View style={styles.pinTitleContainer}>
              <Text style={styles.pinTitle}>Enter PIN or Token</Text>
            </View>
            <Controller
              name="pinCode"
              control={control}
              render={({field: {onChange, value}}) => (
                <SmoothPinCodeInput
                  value={value}
                  onTextChange={onChange}
                  codeLength={4}
                  cellSpacing={8}
                  containerStyle={styles.inputContainer}
                  animated={false}
                  cellStyle={[
                    styles.cellDefault,
                    !!errors.pinCode?.message && styles.cellWithError,
                  ]}
                  cellStyleFocused={styles.cellFocused}
                  password
                />
              )}
            />
            <View style={styles.containerWithSwitch}>
              <Text style={styles.switchTitle}>Save Beneficiary</Text>
              <SwitchButton
                value={savingBeneficiary}
                setValue={setSavingBeneficiary}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <CustomButton
                buttonType="primary"
                handlePress={handleSubmit(onSubmit)}
                title="Continue"
                customStyle={styles.loginButton}
              />
              <CustomButton
                buttonType="primary"
                handlePress={() => console.log(1)}
                customStyle={styles.biometricButton}>
                <FingerPrint />
              </CustomButton>
            </View>
            <Pressable onPress={handleGoBack}>
              <Text style={styles.goBackButton}>Back</Text>
            </Pressable>
            <LargeModal
              icon={<LikeIcon />}
              modalVisible={showModal}
              title={'Transfer is Successul'}
              hideModal={closeModal}
              primaryButtonTitle={'Continue'}
              onPrimaryButtonPress={() => console.log(1)}
              secondaryButtonTitle={'Cancel'}
              onSecondaryButtonPress={closeModal}
            />
          </View>
          <View style={styles.paginationContainer}>
            <Text style={styles.paginationText}>Step 2</Text>
            <View style={styles.pagination}>
              <View style={styles.inactiveScreenIndicator} />
              <View style={styles.activeScreenIndicator} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SecondBMAView;
