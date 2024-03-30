import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Card, TextInputHome } from '../components';
import { Spacing, Heading } from '../components/common';
import styles from '../styles/screens/home';
import { AppNavigationProps } from '../types/navigation';
import { getUserCards } from '../services/firestore';
import useSession from '../hooks/useSession';
import EmptyCards from '../components/EmptyCards';

interface HomeProps {
  navigation: AppNavigationProps;
}
export default function Home({}: HomeProps) {
  const { user } = useSession();
  const [cards, setCards] = useState<any>(null);

  useEffect(() => {
    if (!user) return;
    const updateCardList = async () => {
      const value = await getUserCards(user.cards);
      setCards(value);
    };
    updateCardList();
  }, [user]);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Heading type='Semibold' size={16}>
          <Text>Hello</Text>
          <Text>{` `}</Text>
          <Text style={styles.hightlight}>{`${user?.name}!`}</Text>
        </Heading>
        <View>
          <Image source={{ uri: user?.picture }} style={styles.avatar} />
        </View>
      </View>
      <View style={styles.news} />
      <Spacing size={20} />

      <View style={styles.content}>
        <Heading type='Medium' size={12}>
          All collections
        </Heading>
        <Spacing size={20} />

        <FlatList
          contentContainerStyle={{
            paddingBottom: 5,
          }}
          data={cards}
          renderItem={({ item }) => <Card item={item} />}
          ItemSeparatorComponent={Spacing}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item?.id}
          ListEmptyComponent={EmptyCards}
          refreshing
        />
      </View>

      <TextInputHome />
    </SafeAreaView>
  );
}
