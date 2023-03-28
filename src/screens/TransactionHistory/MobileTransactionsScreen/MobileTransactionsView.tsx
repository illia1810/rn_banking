import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  ListRenderItemInfo,
  Pressable,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SwipeListView} from 'react-native-swipe-list-view';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Calendar, CircularArrow, Cross, DownArrow} from '../../../assets/svg';
import {DatePickerInput, MobileTransaction} from '../../../components';
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

const MobileTransactionsView = () => {
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
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Transfers'},
    {key: 'second', title: 'Airtime & Data'},
    {key: 'third', title: 'Bills Payments'},
  ]);

  useEffect(() => {
    if (startDate === '') {
      setPickerError(true);
    } else {
      setPickerError(false);
    }
  }, [startDate]);

  const VisibleItem = props => {
    const {data} = props;
    return (
      <MobileTransaction
        transactionType={data.item.type}
        date={data.item.date}
        ammount={data.item.ammount}
        transactionName={data.item.name}
        key={data.index}
      />
    );
  };

  const renderItem = (data: ListRenderItemInfo<TTransaction>) => (
    <VisibleItem data={data} />
  );

  const FirstRoute = () => (
    <View style={styles.routeContainer}>
      <SwipeListView
        useFlatList
        data={listData}
        renderItem={data => renderItem(data)}
        renderHiddenItem={() => (
          <View style={styles.hiddenCantainer}>
            <CircularArrow />
            <Text style={styles.hiddenText}>Repay</Text>
          </View>
        )}
        disableRightSwipe={true}
        leftOpenValue={0}
        rightOpenValue={-70}
      />
    </View>
  );

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: FirstRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={'green'}
      inactiveColor={'black'}
      style={styles.tabBar}
      indicatorStyle={styles.indicatorStyle}
      renderLabel={({route, focused}) => (
        <Text style={[focused ? styles.tabBarText : styles.tabBarTextInactive]}>
          {route.title}
        </Text>
      )}
    />
  );

  const clearDates = () => {
    setStartDate('');
    setEndDate('');
    setDateInputValue('');
  };

  const optionsList = transactionData.map((item, index) => ({
    key: `${index}`,
    option: item.name,
  }));

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

  return (
    <View style={styles.outerContainer}>
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
            {dateInputValue ? dateInputValue : 'Choose date range'}
          </Text>
          <Calendar />
        </Pressable>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        tabBarPosition={'top'}
        renderTabBar={renderTabBar}
        swipeEnabled={false}
      />
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
        <View style={styles.topLabel}>
          <Text style={styles.topLabelText}>Choose Account</Text>
          <Pressable
            onPress={() => refRBSheetAccount.current?.close()}
            style={styles.closeButton}>
            <Cross />
          </Pressable>
        </View>
        <View>
          <FlatList
            data={optionsList}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.key}
                onPress={() => setAccountInputValue(item.option)}
                style={styles.accountOptionContainer}>
                <Text style={styles.accountOptionText}>{item.option}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
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

export default MobileTransactionsView;
