import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop:40
  },
})