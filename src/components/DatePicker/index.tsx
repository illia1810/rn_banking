import React, {FC} from 'react';
import {Modal, Platform, Pressable, Text, View} from 'react-native';
import DateTimePicker, {
  AndroidNativeProps,
  DateTimePickerEvent,
  IOSNativeProps,
} from '@react-native-community/datetimepicker';
import {COLORS} from '../../constants';
import styles from './styles';

type NativePickerProps = IOSNativeProps & AndroidNativeProps;

type TDatePickerProps = Omit<NativePickerProps, 'onChange'> & {
  isOpen: boolean;
  onClose: () => void;
  onChange: (date: Date | undefined) => void;
  onConfirm: () => void;
  mode?: 'date' | 'time';
};

const isAndroid = Platform.OS === 'android';

const DatePicker: FC<TDatePickerProps> = ({
  isOpen,
  onClose,
  onChange,
  onConfirm,
  mode,
  ...rest
}) => {
  if (!isOpen) {
    return null;
  }

  const handleChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    if (isAndroid) {
      onClose();
      if (event.type === 'dismissed') {
        onChange(selectedDate);
      }
    } else {
      onChange(selectedDate);
    }
  };

  if (Platform.OS === 'android') {
    return (
      <DateTimePicker
        textColor={COLORS.BLACK}
        mode={mode}
        display={'default'}
        onChange={handleChange}
        {...rest}
      />
    );
  }
  return (
    <Modal visible={isOpen} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <DateTimePicker
            textColor={COLORS.BLACK}
            mode={mode}
            display={'spinner'}
            onChange={handleChange}
            {...rest}
          />
          <View style={styles.buttonContainer}>
            <Pressable onPress={onClose}>
              <Text style={[styles.textInButton, styles.redText]}>Cancel</Text>
            </Pressable>
            <Pressable onPress={onConfirm}>
              <Text style={[styles.textInButton, styles.blueText]}>
                Confirm
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DatePicker;
