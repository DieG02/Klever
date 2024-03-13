import { AuthNavigationProps } from '../types/navigation';
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import SignUpSvg from '../assets/svg/SignUpSvg';
import { FacebookAuthButton, GoogleAuthButton } from '../components';
import { Parragraph, Title } from '../components/common';
import { Colors, Poppins } from '../styles/global';

interface SignUpProps {
  navigation: AuthNavigationProps
}
export default function SignUp({ navigation }: SignUpProps) {
  const onRedirect = () => {
    navigation.replace('SignIn');
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.White} barStyle='dark-content'/>
      <View style={styles.brand}>
        <Title style={styles.klever}>
          Klever
        </Title>
      </View>

      <View>
        <Title style={styles.title}>
          Create your account
        </Title>
        <Parragraph>
          Organise your ideas in an easy, quick and simple way!
        </Parragraph>
      </View>

      <View style={styles.svg}>
        <SignUpSvg/>
      </View>

      <View>
        <GoogleAuthButton/>
        <FacebookAuthButton/>
        <Pressable onPress={onRedirect}>
          <Parragraph style={styles.center}>
            <Text>
              Already have an account?&nbsp;
            </Text>
            <Text style={styles.redirect}>
              Sign in
            </Text>
          </Parragraph>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Pressable>
          <Parragraph size='sm' style={styles.center}>
            <Text>
              {`By registration up you accept the `}
            </Text>
            <Text style={{ color: Colors.Link }}>
              {` Terms of Services & Privacy Policy`}
            </Text>
          </Parragraph>
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
  redirect: {
    fontFamily: Poppins.Semibold,
    color: Colors.Primary,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 24,
    marginHorizontal: 24,
  },
});