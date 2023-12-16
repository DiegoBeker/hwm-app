import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../../assets/HardworkLogo.png')}
        style={{ height: 20, width: 80 }}
      />
      <View style={styles.menu}>
        <Ionicons style={styles.icon} name='home' />
        <Text style={styles.text}>HOME</Text>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/114487600?v=4' }}
          style={styles.avatar}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#1E1E1E',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      width:'100%',
      height:60,
      padding: 10
    },
    menu: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      paddingHorizontal: 10
    },
    icon: {
      backgroundColor: '#EBEBEB',
      color: '#1E1E1E',
      fontSize: 28,
      borderRadius: 5,
      marginHorizontal:5
    },
    text: {
      color: '#fff',
    },
    avatar: {
      width:40,
      height:40,
      borderRadius:8,
      marginLeft:20
    }
  });
  