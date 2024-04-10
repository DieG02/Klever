import { useState } from 'react';
import { TouchableOpacity, TextInput, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/mini';
import { useNavigation } from '@react-navigation/native';
import { addCard } from '../services/firestore';
import { addBoard } from '../services/firestore/board';
import { AppNavigationProps } from '../types/navigation';
import styles from '../styles/components/TextInputCustom';
import { useTranslation } from 'react-i18next';

export default function TextInputHome() {
  const [value, setValue] = useState<string>('');
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProps>();

  const handleOnPress = async () => {
    const title = value.trim();
    if (!title) return;
    const cardRef = await addBoard({
      title,
      description: '',
      category: 'none',
    });
    setValue('');
    navigation.navigate('Collection', {
      id: cardRef.id,
      title: value,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          maxLength={30}
          placeholder={t('home.new_item')}
          value={value}
          onChangeText={setValue}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleOnPress}
          disabled={!value.trim()}>
          <ArrowRightIcon color={styles.icon.color} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
