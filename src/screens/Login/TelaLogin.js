import React, { useState } from 'react';
import { StatusBar, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Container, Content, Logo } from '../../../AppStyle';
import InputWithIcon from '../../components/inputs/inputWithIcon/InputWithIcon';
import ButtonDefault from '../../components/button/button';



export default function TelaLogin({navigation}) {
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
            source={require('../../../assets/LogolUMACOST.png')}
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

          <TouchableOpacity
            onPress={() => navigation.navigate('Cadastro')}
            style={{ backgroundColor: 'transparent', marginBottom: 10 }}
          >
            <Text style={{ color:'#fff'}}>Cadastrar-se</Text>
          </TouchableOpacity>
        </Content>
      </ScrollView>
    </Container>
  );
}
