import auth from '@react-native-firebase/auth';

export const SyncUserLocale = async (locale: string) => {
  await auth().setLanguageCode(locale);
};
