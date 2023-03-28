import React from 'react';
import {Text, View} from 'react-native';
import {SwitchButton} from '../../../components';
import {TManageBiometricsProps} from './ManageBiometricsTypes';
import styles from './styles';

const ManageBiometricsView = ({
  loginValue,
  onActivateLoginBiometrics,
  authValue,
  onActivateAuthBiometrics,
}: TManageBiometricsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.typeTitle}>Biometric Login</Text>
          <Text style={styles.typeDescription}>
            Login with Face ID or Fingerprint
          </Text>
        </View>
        <SwitchButton
          value={loginValue}
          onValueChange={onActivateLoginBiometrics}
        />
      </View>
      <View style={styles.itemWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.typeTitle}>Biometric Authentication</Text>
          <Text style={styles.typeDescription}>
            Authenticate transactions with Face ID or Fingerprint
          </Text>
        </View>
        <SwitchButton
          value={authValue}
          onValueChange={onActivateAuthBiometrics}
        />
      </View>
    </View>
  );
};

export default ManageBiometricsView;
