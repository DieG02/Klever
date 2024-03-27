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
import { Parragraph, Title, Spacing } from '../components/common';
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
        <Text>
          <Title>{`Hello `}</Title>
          <Title color='primary'>{`${user?.name}!`}</Title>
        </Text>
        <Image source={{ uri: user?.picture }} style={styles.avatar} />
      </View>

      <View style={styles.news} />

      <View style={styles.content}>
        <View style={styles.labels}>
          <Parragraph weight='semibold'>{`My lists`}</Parragraph>
          <Pressable>
            <Parragraph color='primary' weight='semibold'>
              {`See all`}
            </Parragraph>
          </Pressable>
        </View>
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
