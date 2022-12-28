import React, {FC} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {
  BoxWithLeftArrow,
  BoxWithRightArrow,
  VerticalDots,
} from '../../assets/svg';

import styles from './styles';

interface IMobileTransactionProps {
  transactionType: 'incoming' | 'outcoming';
  date: string;
  ammount: string;
  transactionName: string;
}

const MobileTransaction: FC<IMobileTransactionProps> = ({
  transactionType,
  date,
  ammount,
  transactionName,
}) => {
  return (
    <TouchableHighlight onPress={() => console.log('You touched me')}>
      <View style={styles.contentContainer}>
        <View style={styles.mainContainer}>
          {transactionType === 'incoming' ? (
            <BoxWithRightArrow />
          ) : (
            <BoxWithLeftArrow />
          )}
          <View style={styles.centalContent}>
            <Text style={styles.dateText}>{date}</Text>
            <Text style={styles.title}>{transactionName}</Text>
          </View>
          <Text
            style={[
              styles.textAmmount,
              transactionType === 'incoming'
                ? styles.textGreen
                : styles.textRed,
            ]}>
            {(transactionType === 'incoming' ? 'N ' : '-N ') + ammount}
          </Text>
        </View>
        <View style={styles.greenCorner}>
          <VerticalDots />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default MobileTransaction;
