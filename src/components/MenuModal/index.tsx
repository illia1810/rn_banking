import React, {FC} from 'react';
import {
  ImageBackground,
  ImageRequireSource,
  Modal,
  ModalProps,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CurrencyCoin, HandCoin, Mobile, Transfer} from '../../assets/svg';
import styles from './styles';

const ModalBackground =
  require('../../assets/images/modalBG.png') as ImageRequireSource;

interface IMenyModalProps extends ModalProps {
  hideModal: () => void;
}
const MenuModal: FC<IMenyModalProps> = ({hideModal}) => {
  return (
    <Modal visible={true} style={styles.modalContainer} transparent={true}>
      <TouchableOpacity
        onPress={hideModal}
        style={styles.touchable}
        activeOpacity={1}>
        <ImageBackground
          source={ModalBackground}
          style={styles.backgroundImage}
          resizeMode="cover">
          <View style={styles.list}>
            <Pressable style={[styles.listItem, styles.firstItem]}>
              <Mobile />
              <Text style={styles.greenText}>Quick Airtime</Text>
            </Pressable>
            <Pressable style={styles.listItem}>
              <CurrencyCoin />
              <Text style={styles.greenText}>Quick Bills Payment</Text>
            </Pressable>
            <Pressable style={styles.listItem}>
              <Transfer />
              <Text style={styles.greenText}>Quick Transfers</Text>
            </Pressable>
            <Pressable style={[styles.listItem, styles.lastItem]}>
              <HandCoin />
              <Text style={styles.greenText}>Quick Loans</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Modal>
  );
};

export default MenuModal;
