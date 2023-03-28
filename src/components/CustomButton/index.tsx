import React, {FC} from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface ICustomButtonProps extends PressableProps {
  buttonType: 'primary' | 'ghost';
  title?: string;
  children?: string | React.ReactNode;
  isDisabled?: boolean;
  handlePress(): void;
  customStyle?: StyleProp<ViewStyle>;
}

const CustomButton: FC<ICustomButtonProps> = ({
  buttonType,
  title,
  children,
  isDisabled = false,
  handlePress,
  customStyle,
  ...rest
}) => {
  //const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPress={handlePress}
      disabled={isDisabled}
      style={[
        styles.button,
        styles[buttonType],
        isDisabled && styles[`${buttonType}Disabled`],
        customStyle,
      ]}
      {...rest}>
      <Text style={[styles.text, styles[`${buttonType}Text`]]}>{title}</Text>
      {children}
    </Pressable>
  );
};

export default CustomButton;
