import { Pressable, StyleSheet, Text } from 'react-native';

export default function Alternative({
  letter,
  answer,
  selectedAnswer,
  select,
  id,
  finished
}) {
  const styles = stylesFunction(selectedAnswer, id);

  return (
    <Pressable
      style={styles.alternative}
      onPress={() => select(id)}
      disabled={finished}
    >
      <Text style={styles.letter}>{letter}</Text>
      <Text style={styles.answer}>{answer}</Text>
    </Pressable>
  );
}

const stylesFunction = (selectedAnswer, id) =>
  StyleSheet.create({
    alternative: {
      backgroundColor: selectedAnswer === id ? '#1D1D1D' : '#D9D9D9',
      borderRadius: 10,
      elevation: 10, // Para Android
      shadowOffset: { width: 0, height: 4 }, // Para iOS
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
      paddingHorizontal: 15,
      gap: 10
    },
    letter: {
      fontWeight: 'bold',
      fontSize: 32,
      color: selectedAnswer === id ? '#D9D9D9' : '#1D1D1D'
    },
    answer: {
      fontSize: 12,
      width: '90%',
      textAlign: 'left',
      color: selectedAnswer === id ? '#D9D9D9' : '#1D1D1D'
    }
  });
