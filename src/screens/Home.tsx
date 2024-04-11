import { useEffect } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { Card, TextInputHome } from '../components';
import { Spacing, Heading } from '../components/common';
import styles from '../styles/screens/home';
import { AppNavigationProps } from '../types/navigation';
import EmptyCards from '../components/EmptyCards';
import AvatarSVG from '../assets/svg/Avatar';
import { useSession, useBoards } from '../hooks/';
import BoardSkeleton from '../components/skeleton/Board';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

interface HomeProps {
  navigation: AppNavigationProps;
}
export default function Home({ navigation }: HomeProps) {
  const { user } = useSession();
  const { boards } = useBoards();
  const { t, i18n } = useTranslation();

  const handleRedirect = () => {
    navigation.push('Settings');
  };

  useEffect(() => {
    console.log({ home: user?.locale });
    if (user?.locale) i18n.changeLanguage(user?.locale);
  }, [user?.locale]);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Heading type='Semibold' size={16}>
          <Text>{t('home.grettings')}</Text>
          <Text style={styles.hightlight}>{`${user?.display_name || ''}`}</Text>
        </Heading>
        <TouchableOpacity onPress={handleRedirect}>
          {user?.avatar ? (
            <Image source={{ uri: user?.avatar }} style={styles.avatar} />
          ) : (
            <AvatarSVG width={35} height={35} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.placeholder} />
      <Spacing size={20} />

      <View style={styles.container}>
        <Heading type='Medium' size={12}>
          {t('home.boards')}
        </Heading>
        <Spacing size={20} />

        {boards && (
          <FlatList
            data={boards}
            renderItem={({ item }) => <Card item={item} />}
            ItemSeparatorComponent={Spacing}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item?.id}
            ListEmptyComponent={EmptyCards}
            contentContainerStyle={styles.flatlist}
          />
        )}
        {!boards && [0, 1, 2, 3].map(i => <BoardSkeleton key={i} />)}
      </View>

      <TextInputHome />
    </SafeAreaView>
  );
}
