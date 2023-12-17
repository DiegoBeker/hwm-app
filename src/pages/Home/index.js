import { StyleSheet, View } from "react-native";
import MenuCard from "../../components/MenuCard";

export default function Home(){
  return(
    <View style={styles.container}>
      <MenuCard 
        icon="help-circle"
        title="QUESTÕES"
        text="Prepare-se de forma personalizada respondendo ao banco de questões!"
        action="Começar"
      />
      <MenuCard 
        icon="toggle"
        title="PERSONALIZAR"
        text=""
        action="Acessar"
      />
      <MenuCard 
        icon="stats-chart"
        title="MÉTRICAS"
        text=""
        action="Acessar"
      />
      <MenuCard 
        icon="headset-outline"
        title="CHATBOT"
        text="Treine através de trivias geradas pelo nosso chatbot do telegram"
        action="Começar"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   backgroundColor:'#F0F0F0',
   height: '80%',
   width:'100%',
   borderRadius:15,
   padding:10,
   gap:10
  }
})