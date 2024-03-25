import { Pressable, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Parragraph, Title } from '../components/common';
import { FacebookAuthButton, GoogleAuthButton } from '../components';
import styles from '../styles/screens/signin';
import { Colors } from '../styles/global';
import SignInSvg from '../assets/svg/SignInSvg';
import { AuthNavigationProps } from '../types/navigation';

interface SignInProps {
  navigation: AuthNavigationProps;
}
export default function SignIn({ navigation }: SignInProps) {
  const onRedirect = () => {
    navigation.replace('SignUp');
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.White} barStyle='dark-content' />
      <View style={styles.brand}>
        <Text style={styles.klever}>Klever</Text>
      </View>

      <View>
        <Title style={styles.title}>Log in to your account</Title>
        <Parragraph>Hello, welcome back! 👋</Parragraph>
      </View>

      <View style={styles.svg}>
        <SignInSvg />
      </View>

      <View>
        <GoogleAuthButton />
        <FacebookAuthButton />
        <Pressable onPress={onRedirect}>
          <Text style={styles.center}>
            <Parragraph>{`Don't have an account? `}</Parragraph>
            <Parragraph color='primary' weight='semibold'>
              {`Sign up`}
            </Parragraph>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
