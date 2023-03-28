import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AddNew,
  HistoryBlue,
  MoneyBag,
  PaperDocs,
  Paycode,
  PaymentDocs,
  Schedule,
  TV,
} from '../../assets/svg';
import {
  CardSlider,
  LargeSquareButton,
  SmallSquareButton,
} from '../../components';

import styles from './styles';

const smallGridButtons = [
  {
    icon: <Paycode />,
    title: 'Paycode',
  },
  {
    icon: <MoneyBag />,
    title: 'Nano Loan',
  },
  {
    icon: <PaperDocs />,
    title: 'Account Statement',
  },
  {
    icon: <AddNew />,
    title: 'Open New Account',
  },
];

const largeGridButtons = [
  {
    icon: <HistoryBlue />,
    title: 'Transaction History',
  },
  {
    icon: <PaymentDocs />,
    title: 'Utility Payment',
  },
  {
    icon: <Schedule />,
    title: 'Scheduled Payments',
  },
  {
    icon: <TV />,
    title: 'Cable Subscription',
  },
];

const cards = [
  {
    id: 1,
    cardHolder: 'Mr. Oladele Ahmed',
    cardTag: 'Savings',
    totalAmmount: '₦200,000.00',
    accountNumber: '# 520666935',
  },
  {
    id: 2,
    cardHolder: 'Mr. Oladele Ahmed',
    cardTag: 'Savings',
    totalAmmount: '₦200,000.00',
    accountNumber: '# 520666935',
  },
  {
    id: 3,
    cardHolder: 'Mr. Oladele Ahmed',
    cardTag: 'Savings',
    totalAmmount: '₦200,000.00',
    accountNumber: '# 520666935',
  },
];

const DashboardView = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.safeArea}>
      <View style={styles.outerContainer}>
        <View style={styles.slider}>
          <CardSlider
            cards={cards}
            activeSlide={activeSlide}
            onSnapToItem={setActiveSlide}
          />
        </View>
        <View style={styles.greenContainer} />
        <View style={styles.container}>
          <View style={styles.smallButtons}>
            {smallGridButtons.map(button => {
              return (
                <SmallSquareButton icon={button.icon} title={button.title} />
              );
            })}
          </View>
          <Text style={styles.moreText}>More Services</Text>
          <View style={{flex: 1}}>
            <View style={styles.largeButtons}>
              {largeGridButtons.map(button => {
                return (
                  <LargeSquareButton icon={button.icon} title={button.title} />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardView;
