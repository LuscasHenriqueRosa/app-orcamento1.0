import React, { useState } from 'react';
import { StatusBar, ScrollView, TouchableOpacity, Text } from 'react-native';
import { ContainerDefault, ContentDefault } from '../../components/layouts/BaseLayout';
import { Logo } from '../../components/layouts/LogoStyleDefault';
import InputWithIcon from '../../components/inputs/inputWithIcon/InputWithIcon';
import ButtonDefault from '../../components/button/button';



export default function TelaLogin({navigation}) {
  const [isLocked, setIsLocked] = useState(true);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <ContainerDefault>

      {/* Utilizando ScrollView para adicionar scroll à tela */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentDefault>
            <Logo 
              source={require('../../../assets/LogolUMACOST.png')}
              resizeMode="contain"
            />

            <InputWithIcon 
              placeholder="Usuario/E-mail" 
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
          </ContentDefault>
        </ScrollView>
      <StatusBar style="auto" />
    </ContainerDefault>
  );
}
