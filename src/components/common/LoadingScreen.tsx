import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '../../styles/global';
import Heading from './Heading';
import { useTranslation } from 'react-i18next';

export default function LoadingScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={Colors.Primary} />
      {/* <Heading style={styles.loadingText}>{t('app.utils.loading')}</Heading> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Background,
  },
  loadingText: {
    marginTop: 16,
  },
});
