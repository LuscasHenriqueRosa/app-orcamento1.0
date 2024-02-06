import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaCadastro from '/home/altave/Git/app-orcamento/src/screens/TelaCadastro/TelaCadastro';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
