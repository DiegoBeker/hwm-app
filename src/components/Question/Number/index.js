import { StyleSheet, View, Text } from "react-native";

export default function Number({number}){
  return(
    <View style={styles.box}>
      <Text>{number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box:{
    alignItems:"center",
    justifyContent:"center",
    height:30,
    width:30,
    padding:2,
    borderColor:'1e1e1e',
    borderWidth:2,
    borderRadius:5,
    textAlign:'center'
  }
})