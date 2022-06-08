import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import RootNavigator from './src/Navigation/Index'; 
import {Amplify} from 'aws-amplify';  
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
import AuthContextProvider from './src/context/AuthContext';
import BusketContextProvider from './src/context/BusketContext'; 


Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
  });

function App() {
  return (
    <NavigationContainer>
          <AuthContextProvider>
            <BusketContextProvider>
              <RootNavigator />
            </BusketContextProvider>
          </AuthContextProvider>

        <StatusBar style='auto'/>
    </NavigationContainer>


  );
}

export default withAuthenticator(App);

