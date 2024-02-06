import React, { useState } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { Container, Content, Logo } from './AppStyle';
import InputWithIcon from './src/components/inputs/inputWithIcon/InputWithIcon';
import ButtonDefault from './src/components/button/button';

export default function App() {
  const [isLocked, setIsLocked] = useState(true);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <Container>
      <StatusBar style="auto" />

      {/* Utilizando ScrollView para adicionar scroll à tela */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Content>
          <Logo 
            source={require('./assets/lUMACOST-removebg-preview.png')}
            resizeMode="contain"
          />
        </Content>

        <Content>
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
          <ButtonDefault title='Logar'/>

        </Content>
      </ScrollView>
    </Container>
  );
}
