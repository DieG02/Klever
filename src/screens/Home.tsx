import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { Card, TextInputHome } from '../components';
import { Spacing, Heading } from '../components/common';
import styles from '../styles/screens/home';
import { AppNavigationProps } from '../types/navigation';
import EmptyCards from '../components/EmptyCards';
import AvatarSVG from '../assets/svg/Avatar';
import { useSession, useBoards } from '../hooks/';
import BoardSkeleton from '../components/skeleton/Board';

interface HomeProps {
  navigation: AppNavigationProps;
}
export default function Home({}: HomeProps) {
  const { user } = useSession();
  const { boards } = useBoards();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Heading type='Semibold' size={16}>
          <Text>Hello</Text>
          <Text>{` `}</Text>
          <Text style={styles.hightlight}>{`${user?.display_name}!`}</Text>
        </Heading>
        <View>
          {user?.avatar ? (
            <Image source={{ uri: user?.avatar }} style={styles.avatar} />
          ) : (
            <AvatarSVG width={35} height={35} />
          )}
        </View>
      </View>
      <View style={styles.placeholder} />
      <Spacing size={20} />

      <View style={styles.container}>
        <Heading type='Medium' size={12}>
          All collections
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
