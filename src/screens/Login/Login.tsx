import React from 'react'
import {
  SafeAreaView,
  View, 
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Login = () => {
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
          <Image
            source={{ uri: url2 }}
            style={styles.logo}
          />
          <Text style={styles.title}>
            Organizá tus listas de manera fácil, rápida y sencilla
          </Text>
        </View>

        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.google}>
            <Text>
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebook}>
            <Text>
              Feisbuk
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login