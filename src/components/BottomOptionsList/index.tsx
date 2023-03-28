import React, {FC} from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {Cross} from '../../assets/svg';
import styles from './styles';

type options = {
  key: string;
  option: string;
};

interface IBottomSheetWithOptionsProps {
  title: string;
  dataArray: options[];
  onOptionPress: (option: string) => void;
  onClosePress: () => void;
}

const BottomOptionsList: FC<IBottomSheetWithOptionsProps> = ({
  title,
  dataArray,
  onOptionPress,
  onClosePress,
}) => {
  return (
    <>
      <View style={styles.topLabel}>
        <Text style={styles.topLabelText}>{title}</Text>
        <Pressable onPress={onClosePress} style={styles.closeButton}>
          <Cross />
        </Pressable>
      </View>
      <View>
        <FlatList
          data={dataArray}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => onOptionPress(item.option)}
              style={styles.accountOptionContainer}>
              <Text style={styles.accountOptionText}>{item.option}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default BottomOptionsList;
