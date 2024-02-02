import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Content, Logo } from './AppStyle';
import InputWithIcon from './src/components/inputs/inputWithIcon/InputWithIcon';

export default function App() {
  const [isLocked, setIsLocked] = useState(true);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <Container>
      <StatusBar style="auto" />

      <Content>
        <Logo 
          source={require('./assets/lUMACOST-removebg-preview.png')}
          resizeMode="contain">
        </Logo>
      </Content>

      <Content style="gap:5px;">
        <InputWithIcon 
          placeholder="Digite aqui..." 
          icon="people-sharp" 
        />
        <InputWithIcon 
          placeholder="Senha" 
          icon={isLocked ? 'lock-closed' : 'lock-open'}
          onIconPress={() => {
            toggleLock(); // Alternar o estado quando o ícone for pressionado
          }}
          isPasswordVisible={!isLocked} // Passar o estado para controlar a visibilidade da senha
        />
      </Content>
      
    </Container>
  );
}




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
