import React, {FC, useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import EyeButton from '../EyeButton';

import styles from './styles';

interface IInputFieldProps extends TextInputProps {
  value: string;
  onChangeText(text: string): void;
  placeholder: string;
  type: 'text' | 'password';
  topLabel: boolean;
  customStyle?: StyleProp<ViewStyle>;
  isError?: boolean;
  keyboardType: KeyboardTypeOptions;
}

const InputField: FC<IInputFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  type,
  topLabel,
  customStyle,
  isError = false,
  keyboardType,
  ...rest
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(type === 'password');
  const [topLabelText, setTopLabelText] = useState('');

  const togglePasswordVisible = () => setIsPasswordHidden(!isPasswordHidden);
  const textInputChange = (text: string) => {
    onChangeText(text);
    if (text.length >= 1) {
      setTopLabelText(placeholder);
    } else {
      setTopLabelText('');
    }
  };

  return (
    <>
      {topLabel && (
        <View
          style={[
            styles.labelContainer,
            topLabelText === '' && styles.labelHidden,
          ]}>
          <Text style={styles.labelText}>{topLabelText}</Text>
        </View>
      )}
      <View>
        <TextInput
          onChangeText={textInputChange}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={[styles.textInput, customStyle]}
          secureTextEntry={isPasswordHidden}
          {...rest}
        />
        {type === 'password' && (
          <EyeButton
            toggleVisible={togglePasswordVisible}
            isElementHidden={isPasswordHidden}
            customStyle={styles.eyeIcon}
          />
        )}
      </View>
    </>
  );
};

export default InputField;
