import { StyleSheet, Text, View } from "react-native";
import Alternative from "./Alternative";
import { TouchableOpacity } from "react-native";

export default function Question({selectedQuestion}) {
  const letters = ['A','B','C','D','E','F'];

  return(
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={styles.questionText}>{selectedQuestion?.questao}</Text>
        {selectedQuestion?.alternativas?.map((a, index) => <Alternative key={a.id} letter={letters[index]} answer={a.alternativa}/>)}
        <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.buttonText}>Confirmar Resposta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   width:'100%',
   alignItems:"center",
  },
  question:{
    borderRadius:10,
    padding:8,
    gap:15,
    alignItems:"center",
    width:'100%'
  },
  questionText:{
    backgroundColor: '#1e1e1e',
    borderRadius:10,
    padding:8,
    fontWeight: 'bold',
    color: '#f0f0f0',
    marginBottom:10,
    width:'100%',
    textAlign:"left",
  },
  sendButton:{
    width:150,
    borderColor:'#1e1e1e',
    borderWidth:2,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    padding:4
  },
  numbers:{

  }
})