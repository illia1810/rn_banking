import React, {FC} from 'react';
import {Pressable, PressableProps, Text, View} from 'react-native';

import styles from './styles';

interface ILargeSquareButtonProps extends PressableProps {
  title: string;
  icon: JSX.Element;
}

const LargeSquareButton: FC<ILargeSquareButtonProps> = ({
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

export default LargeSquareButton;
