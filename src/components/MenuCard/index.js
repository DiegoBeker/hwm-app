import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MenuCard({
  icon,
  title,
  text,
  action,
  navigation,
  name
}) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(175,90,193,1)', 'rgba(245,45,124,1)']}
        style={styles.background}
        start={{ x: 0.2, y: 0.4 }}
        end={{ x: 1, y: 0.6 }}
      >
        <View style={styles.title}>
          <Ionicons style={styles.text} name={icon} />
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <Text style={styles.description}>{text}</Text>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(name)}
          >
            <Text style={{ fontWeight: 'bold' }}>{action}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  background: {
    backgroundColor: 'rgb(175,90,193)',
    borderRadius: 10,
    padding: 10
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8
  },
  text: {
    color: '#F0F0F0',
    fontSize: 32,
    fontWeight: 'bold'
  },
  description: {
    color: '#F0F0F0',
    fontSize: 12,
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginVertical: 15
  },
  buttonArea: {
    alignItems: 'flex-end'
  },
  button: {
    backgroundColor: '#F0F0F0',
    width: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
