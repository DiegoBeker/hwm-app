import { StyleSheet, Text, View, Image } from 'react-native';

export default function Footer() {
  return(
    <View style={styles.footer}>
      <Image 
        style={styles.logo}
        source={require('../../../assets/BottomLogo.png')}
      />
      <View style={styles.textArea}>
        <Text style={styles.text}>@Copyright 2023 HWM</Text>
        <Text style={[styles.text, styles.underline]}>Políticas de privacidade • Termos de uso</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer:{
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width:'100%',
    height:60,
    padding: 10
  },
  logo:{
    height: 20,
    width: 80
  },
  textArea:{
    alignItems:'flex-end',
    justifyContent:'space-between'
  },
  text:{
    margin: 2,
    color: '#6E6E6E',
    fontSize: 8,
  },
  underline:{
    textDecorationLine:'underline'
  }
})