import { AppNavigationProps } from '../types/navigation';
import { FlatList, Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Card } from '../components';
import { Parragraph, PrimaryButton, Title } from '../components/common';
import TextInputHome from '../components/TextInputHome';
import { Colors } from '../styles/global';
import { avatar } from '../utils/mock.data';
import { data } from '../utils/mock.data';
import useSession from '../hooks/useSession';
import { useEffect, useState } from 'react';
import { getUserCards } from '../services/firestore';

interface HomeProps {
  navigation: AppNavigationProps;
}
export default function Home({ }: HomeProps) {
  const { user } = useSession();
  const [cards, setCards] = useState<any>([]);

  const Separator = () => (
    <View style={{ marginBottom: 15 }}/>
  );

  useEffect(() => {
    if(!user) return;
    const useCards = async () => {
      const value = await getUserCards(user.cards);
      setCards(value);
    }
    useCards();
  }, [user]);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Text>
          <Title>{`Hello `}</Title>
          <Title color='primary'>{`Username`}</Title>
        </Text>
        <Image source={{ uri: avatar }} style={styles.avatar}/>
      </View>

      <View style={styles.news}/>

      <View style={styles.content}>
        <View style={styles.labels}>
          <Parragraph weight='semibold'>
            {`My lists`}
          </Parragraph>
          <Pressable>
            <Parragraph color='primary' weight='semibold'>
              {`See all`}
            </Parragraph>
          </Pressable>
        </View>
        <FlatList
          data={cards}
          contentContainerStyle={{ paddingBottom: 5 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Card item={item} />}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item.id}
          refreshing
        />
      </View>
      <TextInputHome />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  news: {
    height: 100,
    borderRadius: 15,
    marginBottom: 30,
    backgroundColor: Colors.Dark,
    marginHorizontal: 20,
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  footer: {
    paddingVertical: 20,
    backgroundColor: Colors.White,
  },

  modalContainer: {
    backgroundColor: Colors.Black,
    // flex: 1,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  }
})