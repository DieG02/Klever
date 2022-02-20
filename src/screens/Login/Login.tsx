import React from 'react'
import {
  SafeAreaView,
  View, 
  Text,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
// import Logo from '../../assets/icons/Logo';
import Logo from '../../assets/icons/LogoRounded';
import styles from './styles';


const Login = ({ navigation }: any) => {
  const url = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/frutas-1552246920.jpg?crop=1.00xw:0.753xh;0,0.105xh&resize=640:*';
  const url2 = 'https://crudotransparente.com/wp-content/uploads/2020/04/spotify-logo.png';

  return(
    <SafeAreaView style={styles.view}>
      <Image 
        source={{ uri: url }}
        style={styles.background}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Logo width={175} height={175} />
          </View>
          <Text style={styles.title}>
            Organizá tus listas de manera fácil, rápida y sencilla
          </Text>
        </View>

        <View style={styles.btnGroup}>
          <TouchableOpacity style={[styles.google, styles.btnRegister]}>
            <Text style={{ fontSize: 16, color: '#444' }}>
              Continuar con Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.facebook, styles.btnRegister]}>
            <Text style={{ fontSize: 16, color: '#FFF' }}>
              Continuar con Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.guest}
            onPress={() => navigation.navigate('Schedules')} 
          >
            <Text style={{ fontSize: 15, color: '#AAA' }}>
              Continuar como invitado
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.termsAndConditions}>
            {'Al ingresar a '}
            <Text style={styles.bold}>
              {'Klever'}
            </Text>
            {', aceptas nuestros '}
            <Text 
              style={styles.underline} 
              onPress={() => Linking.openURL('https://mi-portfolio-s5q2.vercel.app/')}
            >
              {'Términos & Condiciones y Política de privacidad'}
            </Text>
          </Text>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Login