import { StyleSheet, Text, Pressable } from 'react-native';

export default function Number({
  number,
  selectedQuestion,
  id,
  correctIds,
  wrongIds
}) {
  const props = {
    selectedQuestion,
    id,
    correctIds,
    wrongIds
  };
  const styles = stylesFunction(props);

  return (
    <Pressable style={styles.box}>
      <Text style={styles.text}>{number}</Text>
    </Pressable>
  );
}

const stylesFunction = (props) =>
  StyleSheet.create({
    box: {
      backgroundColor: handleBackgroundColor(props),
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: 40,
      padding: 2,
      borderColor: handleBorderColor(props),
      borderWidth: 2,
      borderRadius: 10,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    text: {
      fontWeight: 'bold',
      color: handleTextColor(props)
    }
  });

function handleBackgroundColor(props) {
  const { selectedQuestion, id, correctIds, wrongIds } = props;

  if (correctIds.includes(id) || wrongIds.includes(id)) {
    return '#fff';
  }

  if (selectedQuestion?.id_questao === id) {
    return '#1e1e1e';
  }

  return '#8D8D8D';
}

function handleTextColor(props) {
  const { id, correctIds, wrongIds } = props;

  if (correctIds.includes(id) || wrongIds.includes(id)) {
    return '#1e1e1e';
  }
  return '#fff';
}

function handleBorderColor(props) {
  const { selectedQuestion, id, correctIds, wrongIds } = props;

  if (correctIds.includes(id)) {
    return 'green';
  }

  if (wrongIds.includes(id)) {
    return 'red';
  }

  if (selectedQuestion?.id_questao === id) {
    return '#1e1e1e';
  }
  return '#8D8D8D';
}
