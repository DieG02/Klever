declare module 'react-native-config' {
  export interface NativeConfig {
    WEB_CLIENT_ID?: string;
    KEYCHAIN_KEY?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
