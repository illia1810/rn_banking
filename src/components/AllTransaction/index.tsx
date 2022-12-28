import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GreenRightArrow, RedLeftArrow} from '../../assets/svg';
import styles from './styles';

interface IAllTransactionProps {
  transactionType: 'incoming' | 'outcoming';
  date: string;
  ammount: string;
  transactionName: string;
}

const AllTransaction: FC<IAllTransactionProps> = ({
  transactionType,
  date,
  ammount,
  transactionName,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        {transactionType === 'incoming' ? (
          <GreenRightArrow />
        ) : (
          <RedLeftArrow />
        )}
        <View style={styles.centalContent}>
          <Text style={styles.title}>{transactionName}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <Text
          style={[
            styles.textAmmount,
            transactionType === 'incoming' ? styles.textGreen : styles.textRed,
          ]}>
          {'N ' + ammount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AllTransaction;
