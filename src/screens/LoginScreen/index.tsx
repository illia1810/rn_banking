import * as yup from 'yup';
import React, {FC, useState} from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import LinearGradient from 'react-native-linear-gradient';
import {Switch} from 'react-native-switch';

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
        /(?=^[a-zA-Z\d]{7,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*|(?=111\d{17}$).*/,
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
  const {
    control,
    handleSubmit,
    resetField,
    formState: {errors, isSubmitted},
  } = useForm<TLoginFormData>({
    defaultValues: defaultValues,
    resolver: yupResolver(regularLoginSchema),
  });

  const [rememberValue, setRememberValue] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const onSubmit = (data: TLoginFormData) => {
    console.log('111');
    if (data.login === 'Admin' && data.password === 'password') {
      console.log('Success');
    } else {
      console.log('Wrong data');
    }
  };

  const goToNext = () => {
    navigation.navigate('App');
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
                  customStyle={styles.loginButton}
                />
                <CustomButton
                  buttonType="primary"
                  handlePress={goToNext}
                  customStyle={styles.biometricButton}>
                  <FingerPrint />
                </CustomButton>
              </View>
              <View style={styles.centeredText}>
                <Text style={styles.darkGreyText}>No Account?</Text>
                <Pressable onPress={() => console.log(1)}>
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
