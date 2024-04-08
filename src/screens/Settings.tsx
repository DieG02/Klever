import { Image, SafeAreaView, View } from 'react-native';
import { Spacing, Heading } from '../components/common';
import styles from '../styles/screens/settings';
import { AppNavigationProps, RootStackParamList } from '../types/navigation';
import AvatarSVG from '../assets/svg/Avatar';
import { useSession } from '../hooks/';
import {
  ArrowRightOnRectangleIcon,
  HeartIcon,
  LanguageIcon,
  LockClosedIcon,
  MoonIcon,
  UserIcon,
} from 'react-native-heroicons/mini';
import NavItem from '../components/NavItem';
import { AuthLogOut } from '../utils/auth';
import { CommonActions } from '@react-navigation/native';

interface SettingsProps {
  navigation: AppNavigationProps;
}
export default function Settings({ navigation }: SettingsProps) {
  const { user } = useSession();

  const handleLogout = async () => {
    const currentUser = await AuthLogOut();
    if (currentUser === null) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'AuthStack', params: { screen: 'SignIn' } }],
        }),
      );
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <View>
          {user?.avatar ? (
            <Image source={{ uri: user?.avatar }} style={styles.avatar} />
          ) : (
            <AvatarSVG width={100} height={100} />
          )}
        </View>
        <Spacing />

        <Heading type='Semibold' size={18}>
          {user?.display_name}
        </Heading>
        <Heading type='Medium' color='Label' size={13}>
          {user?.email}
        </Heading>
        <Spacing size={30} />
      </View>

      {/* TODO: Show modal to edit */}
      {/* <NavItem icon={UserIcon} label='Edit profile' arrow /> */}

      {/* TODO: Show language modal */}
      <NavItem icon={LanguageIcon} label='Language' arrow />

      {/* TODO: Include in next version */}
      {/* <NavItem icon={MoonIcon} label='Dark mode' />
      {user?.provider === 'email' && (
        <NavItem icon={LockClosedIcon} label='Change password' arrow />
      )} */}

      {/* TODO: Redirect to the store*/}
      <NavItem icon={HeartIcon} label='Rate app' arrow />

      <NavItem
        icon={ArrowRightOnRectangleIcon}
        label='Log out'
        type='Danger'
        onPress={handleLogout}
      />
    </SafeAreaView>
  );
}
