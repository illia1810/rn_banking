import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GreyRightArrow, MobileGreen, Star} from '../../../assets/svg';
import {MainTransactionHistoryProps} from './MainTransactionHistoryTypes';
import styles from './styles';

const MainTransactionHistoryView = ({
  onPressAllTransactions,
  onPressMobileTransactions,
}: MainTransactionHistoryProps) => {
  return (
    <SafeAreaView edges={['left', 'right']} style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.boldText, styles.topText]}>Select Category</Text>
        <Pressable onPress={onPressAllTransactions} style={styles.bigButton}>
          <Star />
          <Text style={[styles.boldText, styles.buttonText]}>
            All Transactions
          </Text>
          <GreyRightArrow />
        </Pressable>
        <Pressable onPress={onPressMobileTransactions} style={styles.bigButton}>
          <MobileGreen />
          <Text style={[styles.boldText, styles.buttonText]}>
            Mobile Transactions
          </Text>
          <GreyRightArrow />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MainTransactionHistoryView;
