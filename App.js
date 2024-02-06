import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin from './src/screens/Login/TelaLogin';
import TelaCadastro from './src/screens/Cadastro/TelaCadastro';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
