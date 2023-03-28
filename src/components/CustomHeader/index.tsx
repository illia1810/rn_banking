import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BellIcon} from '../../assets/svg';
import BackArrowButton from '../BackArrowButton';

import styles from './styles';

interface ICustomHeaderProps {
  title?: string;
  goBackButton?: boolean;
  bellIcon?: boolean;
}

const CustomHeader: FC<ICustomHeaderProps> = ({
  title,
  goBackButton,
  bellIcon,
}) => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.headerContainer}>
        {goBackButton && <BackArrowButton onPress={goBack} />}
        {title && (
          <Text
            style={[
              styles.title,
              !!goBack && !bellIcon && styles.titleWithoutRightIcon,
            ]}>
            {title}
          </Text>
        )}
        {bellIcon && <BellIcon />}
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
