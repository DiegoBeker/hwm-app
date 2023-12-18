import { Pressable, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ToggleArea({ name, value, setValue }) {
  return (
    <Pressable style={styles.container} onPress={() => setValue(!value)}>
      <Text style={styles.text}>{name}</Text>
      {value ? (
        <FontAwesome name="toggle-on" size={26} color="#3FF30D" />
      ) : (
        <FontAwesome name="toggle-off" size={26} color="#6E6E6E" />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: '#1e1e1e',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: 'bold'
  }
});
