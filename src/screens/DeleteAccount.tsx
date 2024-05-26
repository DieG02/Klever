import { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  CheckIcon,
  TrashIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/mini';
import {
  Layout,
  Heading,
  Spacing,
  TouchableDebounce,
  PasswordField,
} from '../components/common';
import { Colors } from '../styles/global';
import styles from '../styles/screens/deleteaccount';
import { AppNavigationProps, AppRouteProps } from '../types/navigation';
import { RemoveAuthCredentials } from '../services/firestore/auth';
import { CommonActions } from '@react-navigation/native';
import { useSession } from '../hooks';
import { deleteUserData } from '../services/firestore/user';

interface DeleteAccountProps {
  navigation: AppNavigationProps;
  route: AppRouteProps<'DeleteAccount'>;
}

export default function DeleteAccount({
  navigation,
  route,
}: DeleteAccountProps) {
  const { t } = useTranslation('common', { keyPrefix: 'account.offboarding' });
  const { user } = useSession();
  const [password, setPassword] = useState<string>('');
  const [isActive, setActive] = useState<boolean>(false);
  const toogle = () => setActive(!isActive);

  const handleRedirect = () => {
    navigation.goBack();
  };

  const handleChange = (value: string) => {
    setPassword(value);
  };

  const handleDelete = async () => {
    // TODO: Add +1 to count in firebase > feedback
    const success = await RemoveAuthCredentials({
      provider: user?.provider!,
      email: user?.email!,
      password: password,
    });

    if (typeof success === 'string') {
      await deleteUserData(success);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'AuthStack', params: { screen: 'SignIn' } }],
        }),
      );
    } else {
      // TODO: Trigger a notification
    }
  };

  return (
    <Layout backgroundColor='White' barStyle='dark-content'>
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.icon}>
            <TrashIcon color={Colors.Danger} width={28} height={28} />
          </View>
          <Spacing size={25} />
          <View>
            <Heading type='Semibold' size={20}>
              <Text>{t('delete.title.0')}</Text>
              <Text style={{ color: Colors.Danger }}>
                {t('delete.title.1')}
              </Text>
              <Text>{t('delete.title.2')}</Text>
            </Heading>
            <Spacing size={10} />

            <View>
              <View style={styles.contentItem}>
                <ChevronRightIcon color={'#666'} />
                <Heading style={styles.item}>{t('delete.access_data')}</Heading>
              </View>
              <Spacing size={8} />

              <View style={styles.contentItem}>
                <ChevronRightIcon color={'#666'} />
                <Heading style={styles.item}>{t('delete.stored_data')}</Heading>
              </View>
              <Spacing size={8} />

              <View style={styles.contentItem}>
                <ChevronRightIcon color={'#666'} />
                <Heading style={styles.item}>{t('delete.shared_data')}</Heading>
              </View>
            </View>
            <Spacing size={10} />

            <Pressable style={styles.condition} onPress={toogle}>
              <View style={[styles.base, isActive && styles.active]}>
                {isActive && <CheckIcon color={Colors.White} size={15} />}
              </View>
              <View style={styles.flex}>
                <Heading size={13}>{t('delete.warning')}</Heading>
              </View>
            </Pressable>
          </View>
          <Spacing size={30} />

          {user?.provider === 'email' && (
            <>
              <Heading>{t('delete.password')}</Heading>
              <Spacing size={8} />
              <PasswordField
                placeholder={t('delete.placeholder')}
                onChangeText={handleChange}
              />
            </>
          )}
        </ScrollView>

        <View style={styles.group}>
          <TouchableDebounce style={styles.cancel} onPress={handleRedirect}>
            <Heading type='Semibold' color='Primary'>
              {t('cancel')}
            </Heading>
          </TouchableDebounce>
          <TouchableDebounce
            style={[styles.confirm, !isActive && styles.hide]}
            onPress={handleDelete}>
            <Heading type='Semibold' color='Danger'>
              {t('confirm')}
            </Heading>
          </TouchableDebounce>
        </View>
      </View>
    </Layout>
  );
}
