import { AuthNavigationProps } from '../types/navigation';
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import SignInSvg from '../assets/svg/SignInSvg';
import { FacebookAuthButton, GoogleAuthButton } from '../components';
import { Parragraph, Title } from '../components/common';
import { Colors, Poppins } from '../styles/global';

interface SignInProps {
  navigation: AuthNavigationProps
}
export default function SignIn({ navigation }: SignInProps) {
  const onRedirect = () => {
    navigation.replace('SignUp');
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.White} barStyle='dark-content'/>
      <View style={styles.brand}>
        <Text style={styles.klever}>
          Klever
        </Text>
      </View>

      <View>
        <Title style={styles.title}>
          Log in to your account
        </Title>
        <Parragraph>
          Hello, welcome back! 👋
        </Parragraph>
      </View>

      <View style={styles.svg}>
        <SignInSvg/>
      </View>

      <View>
        <GoogleAuthButton/>
        <FacebookAuthButton/>
        <Pressable onPress={onRedirect}>
          <Text style={styles.center}>
            <Parragraph>
              {`Don't have an account? `}
            </Parragraph>
            <Parragraph color='primary' weight='semibold'>
              {`Sign up`}
            </Parragraph>
          </Text>
        </Pressable>
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
  brand: {
    alignItems: 'center',
    marginVertical: 24,
  },
  klever: {
    fontFamily: Poppins.Semibold,
    fontSize: 24,
    color: Colors.Primary,
  },
  title: {
    marginBottom: 8,
  },
  svg: { 
    height: 350,
    width: 350,
    marginVertical: 8,
  },
  center: {
    textAlign: 'center'
  },
});