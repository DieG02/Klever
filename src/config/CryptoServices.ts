import CryptoJS from 'react-native-crypto-js';
import Config from 'react-native-config';

const secret: string = Config.KEYCHAIN_KEY!;

export const encryptData = async (data: string) => {
  const encrypted = CryptoJS.AES.encrypt(data, secret).toString();
  return encrypted;
};

export const decryptData = async (encryptedData: string) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secret);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
};
