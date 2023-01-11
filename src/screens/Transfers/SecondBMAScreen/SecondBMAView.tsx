import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
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
import {TSecondBMAProps} from './SecondBMATypes';
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

const SecondBMAView = ({
  dataForTransfer,
  onBiometricsConfirmation,
  onTransferSubmit,
  isSavingBeneficiary,
  showModal,
  onGoBack,
  onCloseModal,
  onSavingBeneficiaryChange,
  onSuccessTransfer,
  pinCodeFromStorage,
}: TSecondBMAProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TTransferConfirmation>({
    defaultValues: defaultValues,
    resolver: yupResolver(regularTransferConfirmSchema),
  });

  return (
    <SafeAreaView edges={['right', 'left', 'bottom']} style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View>
            <Text style={styles.topHeader}>Confirm Transfer</Text>
            <View style={styles.receiptContainer}>
              <View style={styles.ammountContainer}>
                <Text style={styles.descriptionPrimary}>Ammount</Text>
                <Text style={styles.infoAmmount}>
                  {dataForTransfer.ammount}
                </Text>
              </View>
              <View style={styles.receiptInfo}>
                <Text style={styles.descriptionSecondary}>From Account:</Text>
                <Text style={styles.infoExtra}>
                  {dataForTransfer.sourceAcc}
                </Text>
              </View>
              <View style={styles.receiptInfo}>
                <Text style={styles.descriptionSecondary}>
                  Destination Account:
                </Text>
                <Text style={styles.infoExtra}>
                  {dataForTransfer.destinationAcc}
                </Text>
              </View>
              <View style={[styles.receiptInfo, styles.receiptInfoLast]}>
                <Text style={styles.descriptionSecondary}>Remark:</Text>
                <Text style={styles.infoExtra}>{dataForTransfer.remark}</Text>
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
                  value={pinCodeFromStorage ? pinCodeFromStorage : value}
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
                value={isSavingBeneficiary}
                onValueChange={onSavingBeneficiaryChange}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <CustomButton
                buttonType="primary"
                handlePress={handleSubmit(onTransferSubmit)}
                title="Continue"
                customStyle={styles.loginButton}
              />
              <CustomButton
                buttonType="primary"
                handlePress={onBiometricsConfirmation}
                customStyle={styles.biometricButton}>
                <FingerPrint />
              </CustomButton>
            </View>
            <Pressable onPress={onGoBack}>
              <Text style={styles.goBackButton}>Back</Text>
            </Pressable>
            <LargeModal
              icon={<LikeIcon />}
              modalVisible={showModal}
              title={'Transfer is Successul'}
              hideModal={onCloseModal}
              primaryButtonTitle={'Continue'}
              onPrimaryButtonPress={onSuccessTransfer}
              secondaryButtonTitle={'Cancel'}
              onSecondaryButtonPress={onCloseModal}
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
