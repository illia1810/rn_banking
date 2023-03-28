import React, {FC} from 'react';
import {Pressable, PressableProps, Text, View} from 'react-native';

import styles from './styles';

interface ILargeSquareWhiteButtonProps extends PressableProps {
  title: string;
  icon: JSX.Element;
}

const LargeSquareWhiteButton: FC<ILargeSquareWhiteButtonProps> = ({
  title,
  icon,
  ...rest
}) => {
  return (
    <Pressable style={styles.container} {...rest}>
      <View>{icon}</View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default LargeSquareWhiteButton;
