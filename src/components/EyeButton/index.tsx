import React, {FC} from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';
import EyeOffIcon from '../EyeOffIcon';

interface IProps {
  toggleVisible(): void;
  isElementHidden: boolean;
  customStyle?: StyleProp<ViewStyle>;
}

const EyeButton: FC<IProps> = ({
  toggleVisible,
  isElementHidden,
  customStyle,
}) => {
  return (
    <Pressable onPress={toggleVisible} style={customStyle} testID="eyeButton">
      {isElementHidden ? <EyeOffIcon /> : <EyeOffIcon />}
    </Pressable>
  );
};

export default EyeButton;
