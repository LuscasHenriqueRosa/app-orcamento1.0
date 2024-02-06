import React, { useState } from 'react';
import { StatusBar, ScrollView,TouchableOpacity, Text } from 'react-native';
import { Container, Content, Logo } from '../../../AppStyle';
import InputWithIcon from '../../components/inputs/inputWithIcon/InputWithIcon';
import ButtonDefault from '../../components/button/button';


export default function TelaCadastro({navigation}) {
  const [isLocked, setIsLocked] = useState(true);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <Container>
      <StatusBar style="auto" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Content>
          <Logo 
            source={require('../../../assets/LogolUMACOST.png')}
            resizeMode="contain"
          />
        </Content>

        <Content>
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
            placeholder="Comfirmar Senha" 
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

        </Content>
      </ScrollView>
    </Container>
  );
}
