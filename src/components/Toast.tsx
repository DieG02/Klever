import { View, StyleSheet } from 'react-native';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from 'react-native-heroicons/mini';
import { BaseToast, BaseToastProps } from 'react-native-toast-message';
import { Colors } from '../styles/global';

const palette = {
  success: {
    color: Colors.Forest,
    background: Colors.Tea,
  },
  info: {
    color: Colors.Primary,
    background: Colors.Light,
  },
  warning: {
    color: Colors.Gold,
    background: Colors.Amber,
  },
  error: {
    color: Colors.Danger,
    background: Colors.Pastel,
  },
};

export function SuccessToast({
  text1: title,
  text2: message,
  ...props
}: BaseToastProps) {
  const { color, background } = palette['success'];
  return (
    <BaseToast
      style={styles.wrapper}
      contentContainerStyle={styles.container}
      renderLeadingIcon={() => (
        <View style={[styles.icon, { backgroundColor: background }]}>
          <CheckCircleIcon height={24} width={24} color={color} />
        </View>
      )}
      text1={title}
      text2={message}
      text2NumberOfLines={1}
      {...props}
    />
  );
}

export function InfoToast({
  text1: title,
  text2: message,
  ...props
}: BaseToastProps) {
  const { color, background } = palette['info'];
  return (
    <BaseToast
      style={styles.wrapper}
      contentContainerStyle={styles.container}
      renderLeadingIcon={() => (
        <View style={[styles.icon, { backgroundColor: background }]}>
          <InformationCircleIcon height={24} width={24} color={color} />
        </View>
      )}
      text1={title}
      text2={message}
      text2NumberOfLines={1}
      {...props}
    />
  );
}

export function WarningToast({
  text1: title,
  text2: message,
  ...props
}: BaseToastProps) {
  const { color, background } = palette['warning'];
  return (
    <BaseToast
      style={styles.wrapper}
      contentContainerStyle={styles.container}
      renderLeadingIcon={() => (
        <View style={[styles.icon, { backgroundColor: background }]}>
          <ExclamationCircleIcon height={24} width={24} color={color} />
        </View>
      )}
      text1={title}
      text2={message}
      text2NumberOfLines={1}
      {...props}
    />
  );
}

export function ErrorToast({
  text1: title,
  text2: message,
  ...props
}: BaseToastProps) {
  const { color, background } = palette['error'];
  return (
    <BaseToast
      style={styles.wrapper}
      contentContainerStyle={styles.container}
      renderLeadingIcon={() => (
        <View style={[styles.icon, { backgroundColor: background }]}>
          <XCircleIcon height={24} width={24} color={color} />
        </View>
      )}
      text1={title}
      text2={message}
      text2NumberOfLines={1}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderLeftWidth: 0,
    height: 50,
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 5,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
