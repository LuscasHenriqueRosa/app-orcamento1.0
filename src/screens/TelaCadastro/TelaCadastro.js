import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { Container, Content, Logo } from '/home/altave/Git/app-orcamento/AppStyle.js';
import InputWithIcon from '/home/altave/Git/app-orcamento/src/components/inputs/inputWithoutIcon/InputWithoutIcon.tsx';
import Button from '/home/altave/Git/app-orcamento/src/components/button/button.tsx';
import { useNavigation } from '@react-navigation/native';

export default function TelaCadastro() {
  const [isLocked, setIsLocked] = useState(true);
  const navigation = useNavigation();

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <Container>
      <StatusBar style="auto" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Content>
          <Logo 
            source={require('/home/altave/Git/app-orcamento/assets/lUMACOST-removebg-preview.png')}
            resizeMode="contain"
          />
        </Content>

        <Content>
          <InputWithIcon 
            placeholder="Digite aqui..." 
            icon="people-sharp" 
          />
          <InputWithIcon 
            placeholder="Digite aqui..." 
            icon="people-sharp" 
          />
          <InputWithIcon 
            placeholder="Digite aqui..." 
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
          <Button onPress={() => navigation.goBack()}>Voltar</Button>
        </Content>
      </ScrollView>
    </Container>
  );
}
