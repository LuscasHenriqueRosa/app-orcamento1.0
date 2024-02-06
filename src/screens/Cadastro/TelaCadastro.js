import React, { useState } from 'react';
import { StatusBar, ScrollView,TouchableOpacity, Text } from 'react-native';
import { ContainerDefault, ContentDefault } from '../../components/layouts/BaseLayout';
import { Logo } from '../../components/layouts/LogoStyleDefault';
import InputWithIcon from '../../components/inputs/inputWithIcon/InputWithIcon';
import ButtonDefault from '../../components/button/button';


export default function TelaCadastro({navigation}) {
  const [isLocked, setIsLocked] = useState(true);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <ContainerDefault>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentDefault>
          <Logo 
            source={require('../../../assets/LogolUMACOST.png')}
            resizeMode="contain"
          />


          <InputWithIcon 
            placeholder="Nome" 
            icon="people-sharp" 
          />
          <InputWithIcon 
            placeholder="E-mail" 
            icon="people-sharp" 
          />
          <InputWithIcon 
            placeholder="Senha" 
            icon={isLocked ? 'lock-closed' : 'lock-open'}
            onIconPress={() => {
              toggleLock();
            }}
            isPasswordVisible={!isLocked}
          />

          <InputWithIcon 
            placeholder="Confirmar Senha" 
            icon={isLocked ? 'lock-closed' : 'lock-open'}
            onIconPress={() => {
              toggleLock();
            }}
            isPasswordVisible={!isLocked}
          />

          <ButtonDefault title='Cadastrar'/>
          <Text style={{ color:'#fff'}}>Já possui uma conta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{ backgroundColor: 'transparent', marginBottom: 10 }}
          >
            <Text style={{ color:'rgba(35, 35, 54, 1)'}}>Fazer Log in</Text>
          </TouchableOpacity>

        </ContentDefault>
      </ScrollView>
      <StatusBar style="auto" />
    </ContainerDefault>
  );
}
