import React from 'react';
import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {TBiometricsConfirmation} from '../../../types';
import {Controller, useForm} from 'react-hook-form';
import styles from './styles';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import CustomButton from '../../../components/CustomButton';
import {LargeModal} from '../../../components';
import {DislikeIcon, LikeIcon} from '../../../assets/svg';
import {TConfirmBiometricsProps} from './ConfirmBiometricsTypes';

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

const ConfirmBiometricsView = ({
  handleGoBack,
  onPinSubmit,
  isSuccessModalVisible,
  isFailModalVisable,
  handleSuccessModalClose,
  handleFailModalClose,
}: TConfirmBiometricsProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TBiometricsConfirmation>({
    defaultValues: defaultValues,
    resolver: yupResolver(regularTransferConfirmSchema),
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.topTitle}>Confirm with PIN</Text>
        <View style={styles.pinContainer}>
          <Text style={styles.pinLabel}>Enter PIN</Text>
          <Controller
            name="pinCode"
            control={control}
            render={({field: {onChange, value}}) => (
              <SmoothPinCodeInput
                value={value}
                onTextChange={onChange}
                codeLength={4}
                cellSpacing={20}
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
        </View>
        <View style={styles.buttonsWrapper}>
          <CustomButton
            buttonType={'primary'}
            title={'Continue'}
            handlePress={handleSubmit(onPinSubmit)}
            customStyle={[styles.button, styles.primaryButton]}
          />
          <CustomButton
            buttonType={'ghost'}
            title={'Back'}
            handlePress={handleGoBack}
            customStyle={styles.button}
          />
        </View>
        <LargeModal
          icon={<LikeIcon />}
          modalVisible={isSuccessModalVisible}
          title={'Biometric Activation Successful'}
          hideModal={handleSuccessModalClose}
          primaryButtonTitle={'Continue'}
          onPrimaryButtonPress={handleGoBack}
        />
        <LargeModal
          icon={<DislikeIcon />}
          modalVisible={isFailModalVisable}
          title={'Biometric Activation Failed'}
          subText={'Something went wrong'}
          hideModal={handleFailModalClose}
          primaryButtonTitle={'Retry'}
          onPrimaryButtonPress={handleFailModalClose}
          secondaryButtonTitle={'Cancel'}
          onSecondaryButtonPress={handleGoBack}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ConfirmBiometricsView;
