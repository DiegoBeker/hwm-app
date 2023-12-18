import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Ionicons from '@expo/vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import ToggleArea from './ToggleArea';

export default function Custom({ navigation }) {
  const [goal, setGoal] = useState(100);
  const [clinicaMedica, setClinicaMedica] = useState(true);
  const [cirurgiaGeral, setCirurgiaGeral] = useState(true);
  const [pediatria, setPediatria] = useState(true);
  const [ginecologia, setGinecologia] = useState(true);
  const [preventiva, setPreventiva] = useState(true);

  return (
    <View style={styles.container}>
      <Header />
      <LinearGradient
        colors={['rgba(245,45,124,1)', 'rgba(175,90,193,1)']}
        style={styles.background}
        start={{ x: 0.2, y: 0.4 }}
        end={{ x: 1, y: 0.6 }}
      >
        <View style={styles.navbar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Ionicons name="ios-chevron-back" size={24} color="black" />
            <Text>Voltar</Text>
          </TouchableOpacity>
          <View style={styles.title}>
            <Ionicons name="options-outline" style={styles.titleText} />
            <Text style={styles.titleText}>Personalizar</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Definir meta diária de questões</Text>
          <View style={styles.sliderArea}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={1}
              maximumValue={200}
              minimumTrackTintColor="#3FF30D"
              maximumTrackTintColor="#6E6E6E"
              thumbTintColor="#fff"
              value={goal}
              onValueChange={(value) => setGoal(value.toFixed(0))}
            />
            <Text style={styles.count}>{goal}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Questões por Grandes áreas:</Text>
          <ToggleArea
            name="Clínica Médica"
            value={clinicaMedica}
            setValue={setClinicaMedica}
          />
          <ToggleArea
            name="Cirurgia Geral"
            value={cirurgiaGeral}
            setValue={setCirurgiaGeral}
          />
          <ToggleArea
            name="Pediatria"
            value={pediatria}
            setValue={setPediatria}
          />
          <ToggleArea
            name="Ginecologia e obstetrícia"
            value={ginecologia}
            setValue={setGinecologia}
          />
          <ToggleArea
            name="Medicina preventiva"
            value={preventiva}
            setValue={setPreventiva}
          />
        </View>
      </LinearGradient>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
    height: '100vh'
  },
  background: {
    backgroundColor: 'rgba(175,90,193,1)',
    borderRadius: 10,
    padding: 10,
    height: '80%',
    width: '100%',
    alignItems: 'center',
    gap: 10
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    width: '100%'
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    width: 100
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#f0f0f0'
  },
  card: {
    backgroundColor: '#B5B5B5',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    gap: 5
  },
  sliderArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  count: {
    backgroundColor: '#3FF30D',
    borderColor: '#1e1e1e',
    borderWidth: 2,
    borderRadius: 5,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    width: 50,
    padding: 4,
    textAlign: 'center'
  },
  cardTitle: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
