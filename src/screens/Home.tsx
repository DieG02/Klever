import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Card } from '../components';
import { Parragraph, PrimaryButton, Title } from '../components/common';
import { Colors } from '../styles/global';
import { AppNavigationProps } from '../types/Navigation';
import { avatar } from '../utils/mock.data';
import { data } from '../utils/mock.data';

interface HomeProps {
  navigation: AppNavigationProps;
}
export default function Home({ navigation }: HomeProps) {

  const Separator = () => (
    <View style={{ marginBottom: 15 }}/>
  );
  const onRedirect = (item: any) => navigation.push('Collection', item);

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
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              item={item}
              onRedirect={() => onRedirect(item)}
            />
          )}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.footer}>
        <PrimaryButton>
          {`Create a new list`}
        </PrimaryButton>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  news: {
    width: '100%',
    height: 100,
    borderRadius: 15,
    marginBottom: 30,
    backgroundColor: Colors.Background,
  },

  content: {
    flex: 1,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },

  footer: {
    paddingVertical: 20,
    backgroundColor: Colors.White
  }
})