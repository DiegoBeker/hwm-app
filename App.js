import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Questions from './src/pages/Questions';
import Custom from './src/pages/Custom';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Questions" component={Questions} options={{headerShown:false}}/>
        <Stack.Screen name="Custom" component={Custom} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}