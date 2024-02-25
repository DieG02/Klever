import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type AuthNavigationProps = StackNavigationProp<AuthStackParamList>;
export type AppNavigationProps = StackNavigationProp<AppStackParamList>;

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  AppStack: NavigatorScreenParams<AppStackParamList>;
};

export type AuthStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type AppStackParamList = {
  Home: undefined;
  Collection: undefined;
};