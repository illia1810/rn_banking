import React, {FC, useState} from 'react';
import {
  FlatList,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {DownArrow} from '../../assets/svg';
import styles from './styles';

interface IDropdownSelectProps {
  placeholder: string;
  options: string[];
  value: string;
  onSelect: (option: string) => void;
  customStyle?: StyleProp<ViewStyle>;
}

const DropdownSelect: FC<IDropdownSelectProps> = ({
  placeholder,
  options,
  value,
  onSelect,
  customStyle,
}) => {
  const [showOptionsList, setShowOptionsList] = useState(false);
  const onSelectOption = (item: string) => {
    onSelect(item);
    setShowOptionsList(false);
  };

  const renderOption = ({item, index}: {item: string; index: number}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onSelectOption(item)}
        style={styles.optionContainer}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowOptionsList(!showOptionsList)}
        style={[styles.dropDownWrapper, customStyle]}
        activeOpacity={0.8}>
        {value.length > 0 && (
          <View style={styles.topLabel}>
            <Text style={styles.topLabelText}>{placeholder}</Text>
          </View>
        )}
        <Text style={styles.textInDropdown}>
          {!!value ? value : placeholder}
        </Text>
        <DownArrow style={[showOptionsList ? null : styles.iconInactive]} />
      </TouchableOpacity>
      {showOptionsList && (
        <FlatList
          data={options}
          renderItem={renderOption}
          style={styles.listWrapper}
        />
      )}
    </View>
  );
};

export default DropdownSelect;
