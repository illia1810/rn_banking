import moment from 'moment';
import React, {FC, useEffect, useState} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Calendar} from '../../assets/svg';
import DatePicker from '../DatePicker';
import styles from './styles';

interface IDatePickerInputProps {
  placeholder: string;
  value: string;
  displayFormat: string;
  onChange: (date: string) => void;
  isError: boolean;
  onInputPress?: () => void;
  minDate?: Date | undefined;
  maxDate?: Date | undefined;
  componentRef?: any;
  mode?: 'date' | 'time';
  customStyle?: StyleProp<ViewStyle>;
}

const DatePickerInput: FC<IDatePickerInputProps> = ({
  placeholder,
  value,
  displayFormat,
  onChange,
  isError,
  onInputPress,
  minDate,
  maxDate,
  mode,
  customStyle,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateToDisplay, setDateToDisplay] = useState('');

  const handleChange = (selectedDate: Date | undefined) => {
    const currentDate = selectedDate?.toString() || '';
    onChange?.(currentDate);
  };
  const handleClose = () => {
    setShowDatePicker(false);
  };
  const handleConfirm = () => {
    setDateToDisplay(value ? moment(value).local().format(displayFormat) : '');
    setShowDatePicker(false);
  };
  const handlePress = () => {
    if (isError) {
      onInputPress && onInputPress();
    } else {
      setShowDatePicker(true);
    }
  };
  useEffect(() => {
    if (value.length === 0) {
      setDateToDisplay('');
    }
  }, [value]);

  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.wrapper, customStyle]}>
        {value.length > 0 && (
          <View style={styles.topLabel}>
            <Text style={styles.topLabelText}>{placeholder}</Text>
          </View>
        )}
        <Text style={styles.inputText}>
          {dateToDisplay
            ? dateToDisplay
            : value
            ? moment(value).local().format(displayFormat)
            : placeholder}
        </Text>
        <Calendar />
      </TouchableOpacity>
      <DatePicker
        mode={mode}
        isOpen={showDatePicker}
        value={value ? moment(value).toDate() : new Date()}
        onChange={handleChange}
        onClose={handleClose}
        onConfirm={handleConfirm}
        minimumDate={minDate}
        maximumDate={maxDate}
      />
    </View>
  );
};

export default DatePickerInput;
