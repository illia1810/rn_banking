import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {BackArrowIcon} from '../../assets/svg';

interface IBackArrowButtonProps {
  onPress(): void;
}

const BackArrowButton: FC<IBackArrowButtonProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <BackArrowIcon />
    </Pressable>
  );
};

export default BackArrowButton;
