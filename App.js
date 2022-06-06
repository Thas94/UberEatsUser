import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import RootNavigator from './src/Navigation/Index'; 

export default function App() {
  return (
    <NavigationContainer>
        <RootNavigator />

        <StatusBar style='auto'/>
    </NavigationContainer>


  );
}

