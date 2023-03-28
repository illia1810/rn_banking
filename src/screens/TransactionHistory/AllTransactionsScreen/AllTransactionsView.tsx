import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Calendar, Cross, DownArrow} from '../../../assets/svg';
import {AllTransaction, BottomOptionsList, DatePickerInput} from '../../../components';
import CustomButton from '../../../components/CustomButton';
import styles from './styles';

type TTransaction = {
  type: 'incoming' | 'outcoming';
  date: string;
  ammount: string;
  name: string;
};
const transactionData: TTransaction[] = [
  {
    type: 'outcoming',
    date: '2019-05-12T10:46:24.736Z',
    ammount: '12 009,86',
    name: 'TRF/Nepa Bill/FRM Richard',
  },
  {
    type: 'incoming',
    date: '2019-05-12T10:46:24.736Z',
    ammount: '12 009,86',
    name: 'TRF/Nepa Bill/FRM Richard',
  },
  {
    type: 'incoming',
    date: '2022-12-19T22:00:00.000Z',
    ammount: '12 009,86',
    name: 'TRF/Nepa Bill/FRM Richard',
  },
];

const AllTransactionsView = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateInputValue, setDateInputValue] = useState('');
  const [accountInputValue, setAccountInputValue] = useState('');
  const [pickerError, setPickerError] = useState(true);
  const [listData, setListData] = useState(
    transactionData.map((item, index) => ({
      key: `${index}`,
      date: moment(item.date).format('dddd, MMMM Do YYYY'),
      ammount: item.ammount,
      name: item.name,
      type: item.type,
    })),
  );
  const refRBSheet = useRef();
  const refRBSheetAccount = useRef();

  useEffect(() => {
    if (startDate === '') {
      setPickerError(true);
    } else {
      setPickerError(false);
    }
  }, [startDate]);

  const clearDates = () => {
    setStartDate('');
    setEndDate('');
    setDateInputValue('');
  };

  const onApplyDateFilter = () => {
    if (startDate === '' || endDate === '') {
      setDateInputValue('');
      Alert.alert('Select start and end date', 'Please, select both dates', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]);
    } else {
      const filteredTransactions: TTransaction[] = transactionData.filter(
        item =>
          item.name === accountInputValue &&
          moment(item.date).utc() >= moment(startDate).utc() &&
          moment(item.date).utc() <= moment(endDate).utc(),
      );
      setListData(
        filteredTransactions.map((item, index) => ({
          key: `${index}`,
          date: moment(item.date).format('dddd, MMMM Do YYYY'),
          ammount: item.ammount,
          name: item.name,
          type: item.type,
        })),
      );
      let dates =
        moment(startDate).format('DD.MM.YYYY').toString() +
        '-' +
        moment(endDate).format('DD.MM.YYYY').toString();
      setDateInputValue(dates);
      refRBSheet.current?.close();
    }
  };

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

  const optionsList = transactionData.map((item, index) => ({
    key: `${index}`,
    option: item.name,
  }));

  return (
    <View>
      <View style={styles.filtersContainer}>
        <Pressable
          onPress={() => refRBSheetAccount.current?.open()}
          style={styles.dropdownFilter}>
          {accountInputValue.length > 0 && (
            <View style={styles.topDateLabel}>
              <Text style={styles.topDateLabelText}>Choose Account</Text>
            </View>
          )}
          <Text style={styles.pickerText}>
            {accountInputValue ? accountInputValue : 'Choose Account'}
          </Text>
          <DownArrow />
        </Pressable>
        <Pressable
          onPress={() => refRBSheet.current?.open()}
          style={styles.datePickerButton}>
          {dateInputValue.length > 0 && (
            <View style={styles.topDateLabel}>
              <Text style={styles.topDateLabelText}>Choose date range</Text>
            </View>
          )}
          <Text style={styles.pickerText}>
            {!!dateInputValue ? dateInputValue : 'Choose date range'}
          </Text>
          <Calendar />
        </Pressable>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={listData}
          renderItem={({item}) => (
            <AllTransaction
              key={item.key}
              transactionType={item.type}
              date={item.date}
              transactionName={item.name}
              ammount={item.ammount}
            />
          )}
        />
      </View>
      <RBSheet
        ref={refRBSheetAccount}
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
          title={'Choose Account'}
          dataArray={optionsList}
          onOptionPress={setAccountInputValue}
          onClosePress={() => refRBSheetAccount.current?.close()}
        />
      </RBSheet>
      <RBSheet
        ref={refRBSheet}
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
        <View style={styles.topLabel}>
          <Text style={styles.topLabelText}>Date Range</Text>
        </View>
        <View style={styles.sheetWrapper}>
          <DatePickerInput
            value={startDate}
            onChange={setStartDate}
            isError={false}
            displayFormat="DD MMM YYYY"
            maxDate={new Date()}
            placeholder={'Date from'}
            customStyle={styles.datePicker}
          />
          <DatePickerInput
            value={endDate}
            onChange={setEndDate}
            isError={pickerError}
            displayFormat="DD MMM YYYY"
            maxDate={new Date()}
            minDate={startDate ? new Date(startDate) : new Date()}
            placeholder={'Date to'}
            customStyle={styles.datePicker}
            onInputPress={onEndDatePress}
          />
          <CustomButton
            buttonType="ghost"
            handlePress={clearDates}
            title="Clear Filter"
            customStyle={styles.buttonInSheet}
          />
          <CustomButton
            buttonType="primary"
            handlePress={onApplyDateFilter}
            title="Apply filter"
            customStyle={styles.buttonInSheet}
          />
        </View>
      </RBSheet>
    </View>
  );
};

export default AllTransactionsView;
