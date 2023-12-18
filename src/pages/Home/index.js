import { StyleSheet, View } from "react-native";
import MenuCard from "../../components/MenuCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StatusBar } from "expo-status-bar";

export default function Home({ navigation }){
  return(
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
      <MenuCard 
        icon="help-circle"
        title="QUESTÕES"
        text="Prepare-se de forma personalizada respondendo ao banco de questões!"
        action="Começar"
        navigation={navigation}
        name="Questions"
      />
      <MenuCard 
        icon="options-outline"
        title="PERSONALIZAR"
        text=""
        action="Acessar"
        navigation={navigation}
        name="Custom"
      />
      <MenuCard 
        icon="stats-chart"
        title="MÉTRICAS"
        text=""
        action="Acessar"
        navigation={navigation}
      />
      <MenuCard 
        icon="headset-outline"
        title="CHATBOT"
        text="Treine através de trivias geradas pelo nosso chatbot do telegram"
        action="Começar"
        navigation={navigation}
      />
      </View>
      <Footer/>
      <StatusBar hidden={true}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
    height: '100vh',
  },
  content:{
   backgroundColor:'#F0F0F0',
   height: '80%',
   width:'100%',
   borderRadius:15,
   padding:10,
   gap:10
  }
})