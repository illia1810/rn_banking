import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert, Pressable, ScrollView, Text, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as yup from 'yup';
import {
  BottomOptionsList,
  DatePickerInput,
  InputField,
  PressableSelector,
  SwitchButton,
} from '../../../components';
import CustomButton from '../../../components/CustomButton';
import {COLORS, ROUTES} from '../../../constants';
import {TTransferFormData} from '../../../types';
import {TFirstBMA} from './FirstBMATypes';
import styles from './styles';

const defaultValues = {
  remark: '',
};
export const regularLoginSchema = yup
  .object({
    ammount: yup.string().required('This field is required'),
    remark: yup.string().required('This field is required'),
  })
  .required();

const FirstBMAView = ({
  sourceAccountsData,
  destinationAccountsData,
  frequencyData,
}: TFirstBMA) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sourceAcc, setSourceAcc] = useState('');
  const [destinationAcc, setDestinationAcc] = useState('');
  const [frequencyVal, setFrequencyVal] = useState('');
  const [scheduleTransfer, setScheduleTransfer] = useState(false);
  const [pickerError, setPickerError] = useState(true);
  const [sourceAccError, setSourceAccError] = useState(false);
  const [destinationAccError, setDestinationAccError] = useState(false);

  const refSourceAcc = useRef();
  const refDestinationAcc = useRef();
  const refFrequency = useRef();

  const navigation = useNavigation();

  const showAlert = () =>
    Alert.alert('Start date not selected', 'Please, select start date first', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);

  const onEndDatePress = () => {
    if (startDate === '') {
      setPickerError(true);
      showAlert();
    } else {
      setPickerError(false);
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TTransferFormData>({
    defaultValues: defaultValues,
    resolver: yupResolver(regularLoginSchema),
  });

  const onSubmit = (data: TTransferFormData) => {
    if (sourceAcc.length === 0) {
      setSourceAccError(true);
    } else {
      setSourceAccError(false);
    }
    if (destinationAcc.length === 0) {
      setDestinationAccError(true);
    } else {
      setDestinationAccError(false);
    }
    data.sourceAcc = sourceAcc;
    data.destinationAcc = destinationAcc;
    if (
      !!errors.ammount?.message ||
      !!errors.remark?.message ||
      sourceAcc.length === 0 ||
      destinationAcc.length === 0
    ) {
      Alert.alert('Fill all required fields', '', [
        {
          text: 'Okay',
        },
      ]);
    } else {
      navigation.navigate(ROUTES.TRANSFERS.BETWEEN_ACCOUNTS_SECOND, {data});
    }
  };

  const handleGoBack = () => navigation.goBack();

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.topHeader}>Select Details</Text>
          <PressableSelector
            onPress={() => refSourceAcc.current?.open()}
            placeholder={'Choose Source Account'}
            value={sourceAcc}
            customStyles={styles.dropdown}
            isError={sourceAccError}
          />
          <PressableSelector
            onPress={() => refDestinationAcc.current?.open()}
            placeholder={'Choose Destination Account'}
            value={destinationAcc}
            customStyles={styles.dropdown}
            isError={destinationAccError}
          />
          <Controller
            name="ammount"
            control={control}
            render={({field: {onChange, value}}) => (
              <View>
                <InputField
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter ammount"
                  type="text"
                  topLabel={true}
                  keyboardType="numeric"
                  moneyInput={true}
                  customStyle={styles.input}
                  whiteLabelBG={true}
                  placeholderTextColor={COLORS.GREY_SEC}
                  isError={!!errors.ammount?.message}
                />
              </View>
            )}
          />
          <Controller
            name="remark"
            control={control}
            render={({field: {onChange, value}}) => (
              <View>
                <InputField
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter remark"
                  type="text"
                  topLabel={true}
                  keyboardType="default"
                  customStyle={styles.inputRemark}
                  multiline
                  whiteLabelBG={true}
                  placeholderTextColor={COLORS.GREY_SEC}
                  isError={!!errors.remark?.message}
                />
              </View>
            )}
          />
          <View style={styles.switchContainer}>
            <Text style={styles.secondaryText}>Scheduled Transfer</Text>
            <SwitchButton
              value={scheduleTransfer}
              setValue={setScheduleTransfer}
            />
          </View>
          {scheduleTransfer ? (
            <>
              <PressableSelector
                onPress={() => refFrequency.current?.open()}
                placeholder={'Frequency'}
                value={frequencyVal}
                customStyles={styles.dropdown}
              />
              <DatePickerInput
                value={startDate}
                onChange={setStartDate}
                isError={false}
                displayFormat="DD MMM YYYY"
                maxDate={new Date()}
                placeholder={'Date from'}
                customStyle={styles.dropdown}
              />
              <DatePickerInput
                value={endDate}
                onChange={setEndDate}
                isError={pickerError}
                displayFormat="DD MMM YYYY"
                maxDate={new Date()}
                minDate={startDate ? new Date(startDate) : new Date()}
                placeholder={'Date to'}
                customStyle={styles.datePickerSec}
                onInputPress={onEndDatePress}
              />
            </>
          ) : null}
          <View style={styles.greyLine} />
          <CustomButton
            buttonType="primary"
            handlePress={handleSubmit(onSubmit)}
            title={'Continue'}
            customStyle={styles.primaryButton}
          />
          <Pressable onPress={handleGoBack}>
            <Text style={styles.backButtonText}>Back</Text>
          </Pressable>
        </View>
        <View style={styles.paginationContainer}>
          <Text style={styles.paginationText}>Step 1</Text>
          <View style={styles.pagination}>
            <View style={styles.activeScreenIndicator} />
            <View style={styles.inactiveScreenIndicator} />
          </View>
        </View>
      </ScrollView>
      <RBSheet
        ref={refSourceAcc}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 400,
          },
          draggableIcon: {
            display: 'none',
          },
        }}>
        <BottomOptionsList
          title={'Choose Source Account'}
          dataArray={sourceAccountsData}
          onOptionPress={setSourceAcc}
          onClosePress={() => refSourceAcc.current?.close()}
        />
      </RBSheet>
      <RBSheet
        ref={refDestinationAcc}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 400,
          },
          draggableIcon: {
            display: 'none',
          },
        }}>
        <BottomOptionsList
          title={'Choose Destination Account'}
          dataArray={destinationAccountsData}
          onOptionPress={setDestinationAcc}
          onClosePress={() => refDestinationAcc.current?.close()}
        />
      </RBSheet>
      <RBSheet
        ref={refFrequency}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 400,
          },
          draggableIcon: {
            display: 'none',
          },
        }}>
        <BottomOptionsList
          title={'Select frequency'}
          dataArray={frequencyData}
          onOptionPress={setFrequencyVal}
          onClosePress={() => refFrequency.current?.close()}
        />
      </RBSheet>
    </SafeAreaView>
  );
};

export default FirstBMAView;
