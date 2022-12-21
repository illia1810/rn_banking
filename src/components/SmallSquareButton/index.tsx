import React, {FC} from 'react';
import {Pressable, PressableProps, Text, View} from 'react-native';

import styles from './styles';

interface ISmallSquareButtonProps extends PressableProps {
  title: string;
  icon: JSX.Element;
}

const SmallSquareButton: FC<ISmallSquareButtonProps> = ({
  title,
  icon,
  ...rest
}) => {
  return (
    <Pressable style={styles.container} {...rest}>
      <View>{icon}</View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default SmallSquareButton;
