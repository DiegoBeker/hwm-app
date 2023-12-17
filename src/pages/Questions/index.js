import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from "expo-status-bar";
import Question from "../../components/Question";
import Number from "../../components/Question/Number";

export default function Questions({ navigation }) {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <View style={styles.topArea}>
          <View style={styles.navbar}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
              <Ionicons name="ios-chevron-back" size={24} color="black" />
              <Text>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.title}>
              <Ionicons name="help-circle" style={styles.titleText} />
              <Text style={styles.titleText}>Questões</Text>
            </View>
          </View>
          <View style={styles.iconArea}>
            <Ionicons name="settings-sharp" style={styles.icon} />
            <Ionicons name="information-circle-sharp" style={styles.icon} />
          </View>
        </View>
        <Question/>
        <ScrollView horizontal={true}>
          <View style={styles.questionsArea}>
          <Number number="1"/>
          <Number number="2"/>
          <Number number="3"/>
          <Number number="4"/>
          </View>
        </ScrollView>
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
  content: {
    backgroundColor: '#F0F0F0',
    height: '80%',
    width: '100%',
    borderRadius: 15,
    alignItems:"center",
    padding: 5,
  },
  topArea:{
   width:'100%',
   padding:10,
   gap:5
  },
  navbar:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:'#1e1e1e',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5
  },
  backButton:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:'#F0F0F0',
    borderRadius:20,
    width:100,
  },
  title:{
    flexDirection:"row",
    alignItems:"center",
    gap:5
  },
  titleText:{
    fontWeight:'bold',
    fontSize: 24,
    color:'#f0f0f0'
  },
  iconArea:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-end",
    gap:10
  },
  icon:{
    textAlign:'center',
    borderRadius:5,
    borderColor: '#1e1e1e',
    borderWidth:1,
    fontSize:24,
    padding:2

  },
  questionsArea:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"space-between",
    gap: 10
  }
})