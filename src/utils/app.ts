import { Platform, NativeModules } from 'react-native';

type SupportedDevices = 'ios' | 'android';
const device = Platform.OS as SupportedDevices;

export const getDeviceLocale = () => {
  const native =
    device === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;

  const locale = native.replace('_', '-');

  if (locale.startsWith('es')) {
    // Spanish handler
    return 'es-MX';
  } else {
    // Set english by default
    return 'en-US';
  }
};
