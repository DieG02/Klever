import React from 'react'
import {
  SafeAreaView,
  View, 
  Text,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import Logo from '../../assets/icons/Logo';
import Background from '../../assets/icons/BackgroundLogin';
import styles from './styles';


const Login = ({ navigation }: any) => {
  
  return(
    <SafeAreaView style={styles.view}>
      <View style={styles.background}>
        <Background />
      </View>

      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Logo width={175} height={175}/>
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
            onPress={() => navigation.navigate('MainStack')} 
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