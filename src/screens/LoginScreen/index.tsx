import * as yup from 'yup';
import React, {FC, useEffect, useState} from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import LinearGradient from 'react-native-linear-gradient';
import {Switch} from 'react-native-switch';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import EncryptedStorage from 'react-native-encrypted-storage';

import {InputField, MenuModal} from '../../components';
import {COLORS, ROUTES} from '../../constants';
import {RootStackScreenProps, TLoginFormData} from '../../types';
import {
  BurgerMenu,
  Dots,
  FingerPrint,
  Logo,
  MapPoint,
  MapPointBlue,
  PersonIcon,
  WhiteDots,
} from '../../assets/svg';
import CustomButton from '../../components/CustomButton';

import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const defaultValues = {
  login: '',
  password: '',
};

export const regularLoginSchema = yup
  .object({
    login: yup
      .string()
      .required('This field is required')
      .matches(
        /(?=^[a-zA-Z\d]{5,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*|(?=111\d{17}$).*/,
        'Login and password must contain only letters and numbers',
      ),
    password: yup
      .string()
      .required('This field is required')
      .matches(
        /^(?!$)[a-zA-Z0-9]*$/,
        'Login and password must contain only letters and numbers',
      ),
  })
  .required();

const LoginScreen: FC<
  RootStackScreenProps<typeof ROUTES.AUTHENTICATION.LOGIN_SCREEN>
> = ({navigation}) => {
  const [rememberValue, setRememberValue] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isBiometricsForLogin, setSsBiometricsForLogin] = useState(false);
  const [biometryTypes, setBiometryType] = useState<
    'TouchID' | 'FaceID' | 'Biometrics' | null
  >(null);

  useFocusEffect(() => {
    AsyncStorage.getItem('BiometricsForLogin').then(val =>
      val === 'true'
        ? setSsBiometricsForLogin(true)
        : setSsBiometricsForLogin(false),
    );
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<TLoginFormData>({
    defaultValues: defaultValues,
    resolver: yupResolver(regularLoginSchema),
  });

  const rnBiometrics = new ReactNativeBiometrics();

  const getBiometricsParams = async () => {
    try {
      await rnBiometrics
        .isSensorAvailable()
        .then(resultObject => {
          const {available, biometryType} = resultObject;
          if (available && biometryType === BiometryTypes.TouchID) {
            setBiometryType('TouchID');
          } else if (available && biometryType === BiometryTypes.FaceID) {
            setBiometryType('FaceID');
          } else if (available && biometryType === BiometryTypes.Biometrics) {
            setBiometryType('Biometrics');
          } else {
            setBiometryType(null);
          }
        })
        .catch(e => console.log('Error', e));
    } catch (e) {
      Alert.alert(String(e));
    }
  };

  useEffect(() => {
    getBiometricsParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (data: TLoginFormData) => {
    console.log('data', data);
    try {
      if (data.login === 'Admin1' && data.password === 'password1') {
        navigation.navigate('App', {
          data,
          availableBiometrics: biometryTypes,
        });
      }
    } catch (e) {
      console.log(errors);
    }
  };

  const handleBiometricsLogin = () => {
    try {
      rnBiometrics
        .simplePrompt({promptMessage: `Use ${String(biometryTypes)}`})
        .then(async resultObject => {
          const {success} = resultObject;
          const loginFromStorage = await EncryptedStorage.getItem(
            'LoginForNirsal',
          );
          const passwordFromStorage = await EncryptedStorage.getItem(
            'PasswordForNirsal',
          );
          if (success && loginFromStorage && passwordFromStorage) {
            setValue('login', loginFromStorage);
            setValue('password', passwordFromStorage);
            handleSubmit(onSubmit)();
          } else {
            Alert.alert('Login with biometrics failed', '', [
              {
                text: 'Cancel',
              },
            ]);
          }
        })
        .catch(e => Alert.alert(String(e)));
    } catch (e) {
      console.log(e);
    }
  };

  const clearStorages = () => {
    AsyncStorage.clear();
    EncryptedStorage.clear();
  };

  return (
    <LinearGradient
      colors={['#E4EBF5', '#E4EBF5', '#E4EBF5']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{height: '100%'}}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.outerContainer}>
            <View style={styles.container}>
              <View style={styles.iconsContainer}>
                <BurgerMenu />
                <Logo />
                <MapPoint />
              </View>
              <View style={styles.welcomeText}>
                <Text style={styles.textBold}>Welcome back!</Text>
                <Text style={styles.textStandard}>
                  Login or register to continue
                </Text>
              </View>
              <View>
                <Controller
                  name="login"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <View>
                      <InputField
                        value={value}
                        onChangeText={onChange}
                        placeholder="Login"
                        type="text"
                        topLabel={true}
                        keyboardType="default"
                        customStyle={styles.input}
                      />
                    </View>
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <View>
                      <InputField
                        value={value}
                        onChangeText={onChange}
                        placeholder="Password"
                        type="password"
                        topLabel={true}
                        keyboardType="default"
                        customStyle={styles.input}
                      />
                    </View>
                  )}
                />
              </View>
              <View style={styles.rememberContainer}>
                <View style={styles.rememberButton}>
                  <Text style={styles.greyText}>Remember Me</Text>
                  <Switch
                    value={rememberValue}
                    onValueChange={val => setRememberValue(val)}
                    disabled={false}
                    activeText={'On'}
                    inActiveText={'Off'}
                    circleSize={18}
                    barHeight={18}
                    circleBorderWidth={1}
                    backgroundActive={COLORS.GREEN}
                    backgroundInactive={COLORS.RED}
                    circleActiveColor={COLORS.WHITE}
                    circleInActiveColor={COLORS.WHITE}
                    circleBorderActiveColor={COLORS.GREY}
                    circleBorderInactiveColor={COLORS.GREY}
                    changeValueImmediately={true}
                    renderActiveText={false}
                    renderInActiveText={false}
                    switchWidthMultiplier={2}
                    switchBorderRadius={18}
                  />
                </View>
                <Pressable onPress={() => console.log(1)}>
                  <Text style={styles.link}>Forgot Password</Text>
                </Pressable>
              </View>
              <View style={styles.buttonsContainer}>
                <CustomButton
                  buttonType="primary"
                  handlePress={handleSubmit(onSubmit)}
                  title="Login"
                  customStyle={[
                    styles.loginButton,
                    isBiometricsForLogin && styles.fixedButtonWidth,
                  ]}
                />
                {isBiometricsForLogin ? (
                  <CustomButton
                    buttonType="primary"
                    handlePress={handleBiometricsLogin}
                    customStyle={styles.biometricButton}>
                    <FingerPrint />
                  </CustomButton>
                ) : null}
              </View>
              <View style={styles.centeredText}>
                <Text style={styles.darkGreyText}>No Account?</Text>
                <Pressable onPress={clearStorages}>
                  <Text style={styles.link}>Sign UP</Text>
                </Pressable>
              </View>
            </View>
            <View>
              <View style={styles.bottomContainer}>
                <Pressable style={styles.bottomButton}>
                  <MapPointBlue />
                  <Text style={styles.blueText}>Find Us</Text>
                </Pressable>
                <Pressable
                  style={styles.bottomButton}
                  onPress={() => setModalVisible(!modalVisible)}>
                  {modalVisible ? <WhiteDots /> : <Dots />}
                  <Text
                    style={[styles.blueText, modalVisible && styles.whiteText]}>
                    Quick Services
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.bottomButton, styles.bottomButtonNoBorder]}>
                  <PersonIcon />
                  <Text style={styles.blueText}>Open Account</Text>
                </Pressable>
              </View>
            </View>
            {modalVisible ? (
              <MenuModal hideModal={() => setModalVisible(false)} />
            ) : null}
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;
