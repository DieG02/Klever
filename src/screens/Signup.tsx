import { Pressable, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Parragraph, Title } from '../components/common';
import { FacebookAuthButton, GoogleAuthButton } from '../components';
import SignUpSvg from '../assets/svg/SignUpSvg';
import styles from '../styles/screens/signup';
import { Colors } from '../styles/global';
import { AuthNavigationProps } from '../types/navigation';

interface SignUpProps {
  navigation: AuthNavigationProps;
}
export default function SignUp({ navigation }: SignUpProps) {
  const onRedirect = () => {
    navigation.replace('SignIn');
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.White} barStyle='dark-content' />
      <View style={styles.brand}>
        <Title style={styles.klever}>Klever</Title>
      </View>

      <View>
        <Title style={styles.title}>Create your account</Title>
        <Parragraph>
          Organise your ideas in an easy, quick and simple way!
        </Parragraph>
      </View>

      <View style={styles.svg}>
        <SignUpSvg />
      </View>

      <View>
        <GoogleAuthButton />
        <FacebookAuthButton />
        <Pressable onPress={onRedirect}>
          <Parragraph style={styles.center}>
            <Text>Already have an account?&nbsp;</Text>
            <Text style={styles.redirect}>Sign in</Text>
          </Parragraph>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Pressable>
          <Parragraph size='sm' style={styles.center}>
            <Text>{`By registration up you accept the `}</Text>
            <Text style={{ color: Colors.Link }}>
              {` Terms of Services & Privacy Policy`}
            </Text>
          </Parragraph>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
