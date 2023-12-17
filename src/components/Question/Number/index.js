import { StyleSheet, Text, Pressable } from "react-native";

export default function Number({number, changeQuestion}){
  return(
    <Pressable style={styles.box} onPress={() => changeQuestion(number)}>
      <Text>{number}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  box:{
    alignItems:"center",
    justifyContent:"center",
    height:30,
    width:40,
    padding:2,
    borderColor:'1e1e1e',
    borderWidth:2,
    borderRadius:10,
    textAlign:'center'
  }
})