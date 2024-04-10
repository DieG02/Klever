import { View, StyleSheet } from 'react-native';
import { Heading } from './common';
import CollectionBanner from '../assets/app/CollectionBanner';
import { useTranslation } from 'react-i18next';

interface EmptyCollectionProps {}
export default function EmptyCollection({}: EmptyCollectionProps) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <CollectionBanner height={225} width={225} />
      </View>
      <View style={styles.center}>
        <Heading type='Semibold' size={16} color='Placeholder'>
          {t('collection.empty.title')}
        </Heading>
        <Heading color='Placeholder' size={12}>
          {t('collection.empty.label')}
        </Heading>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  banner: {
    alignItems: 'center',
    marginBottom: 20,
  },
  center: {
    alignItems: 'center',
  },
});
