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

export const mapValueToBreakpoint = (value: number): number => {
  if (value <= 0) return 0;
  else if (value >= 100) return 100;

  const breakpoints = [0, 15, 30, 50, 75, 90, 100];
  let maxBreakpoint = 0;

  for (let i = 0; i < breakpoints.length; i++) {
    if (value < breakpoints[i]) break;
    maxBreakpoint = breakpoints[i];
  }

  return maxBreakpoint;
};
