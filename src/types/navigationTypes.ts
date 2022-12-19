import {StackScreenProps} from '@react-navigation/stack';
import {ROUTES} from '../constants';

export type AuthenticationStackParamList = {
  [ROUTES.AUTHENTICATION.LOGIN_SCREEN]: undefined;
};

export type RootStackScreenProps<T extends keyof AuthenticationStackParamList> =
  StackScreenProps<AuthenticationStackParamList, T>;
