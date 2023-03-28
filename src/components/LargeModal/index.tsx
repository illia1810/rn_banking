import React, {FC} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../CustomButton';
import styles from './styles';

interface ILargeModal {
  icon: JSX.Element;
  title: string;
  modalVisible: boolean;
  hideModal?: () => void;
  subText?: string;
  primaryButtonTitle?: string;
  onPrimaryButtonPress?: () => void;
  secondaryButtonTitle?: string;
  onSecondaryButtonPress?: () => void;
}

const LargeModal: FC<ILargeModal> = ({
  icon,
  title,
  modalVisible,
  hideModal,
  subText,
  primaryButtonTitle,
  onPrimaryButtonPress,
  secondaryButtonTitle,
  onSecondaryButtonPress,
}) => {
  return (
    <Modal visible={modalVisible} transparent={true}>
      <TouchableOpacity
        onPress={hideModal && hideModal}
        style={styles.touchable}
        activeOpacity={1}>
        <View style={styles.container}>
          {icon}
          <Text style={styles.title}>{title}</Text>
          {subText ? <Text style={styles.subText}>{subText}</Text> : null}
          {primaryButtonTitle && onPrimaryButtonPress ? (
            <CustomButton
              buttonType="primary"
              title={primaryButtonTitle}
              handlePress={onPrimaryButtonPress}
              customStyle={styles.primaryButton}
            />
          ) : null}
          {secondaryButtonTitle && onSecondaryButtonPress ? (
            <CustomButton
              buttonType="ghost"
              title={secondaryButtonTitle}
              handlePress={onSecondaryButtonPress}
              customStyle={styles.secondaryButton}
            />
          ) : null}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default LargeModal;
