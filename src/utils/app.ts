import { Platform, NativeModules } from 'react-native';
import auth from '@react-native-firebase/auth';

type SupportedDevices = 'ios' | 'android';
const device = Platform.OS as SupportedDevices;

export const getDeviceLocale = () => {
  if (device === 'android') {
    const locale = NativeModules.I18nManager.localeIdentifier;
    return locale.replace('_', '-');
  } else if (device === 'ios') {
    const locale =
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0];
    return locale.replace('_', '-');
  }
  return 'en-US';
};
