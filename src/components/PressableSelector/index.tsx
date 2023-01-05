import React, {FC} from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {DownArrow} from '../../assets/svg';
import styles from './styles';

interface IPressableSelectorProps {
  placeholder: string;
  value: string;
  onPress: () => void;
  customStyles?: StyleProp<ViewStyle>;
  isError?: boolean;
}

const PressableSelector: FC<IPressableSelectorProps> = ({
  placeholder,
  value,
  onPress,
  customStyles,
  isError = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        isError && styles.containerWithError,
        customStyles,
      ]}>
      {value.length > 0 ? (
        <View style={styles.topLabel}>
          <Text style={styles.topLabelText}>{placeholder}</Text>
        </View>
      ) : null}
      <Text style={styles.textInSelector}>
        {value.length > 0 ? value : placeholder}
      </Text>
      <DownArrow />
    </Pressable>
  );
};

export default PressableSelector;
