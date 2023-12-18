import { Pressable, StyleSheet, Text } from 'react-native';

export default function Search() {
  return (
    <Pressable
      style={styles.container}
      onPress={() => alert('Ainda não implementado!')}
    >
      <Text style={styles.title}>Busque provas</Text>
      <Text style={styles.subtitle}>Exemplo: USP, SUS-SP, SURCE...</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  title: {
    fontWeight: '400',
    fontSize: 18
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 12,
    color: '#6E6E6E'
  }
});
