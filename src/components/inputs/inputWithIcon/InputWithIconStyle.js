// InputWithIconStyle.js
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';


export const ContainerInputWithIcon = styled.View`
  width: 90%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  gap: 5px;
  margin-bottom:30px;
  ${Platform.OS === 'android'
    ? 'elevation: 5;' // Adiciona sombra no Android
    : `
      shadowColor: #000;
      shadowOffset: {
        width: 0,
        height: 2,
      };
      shadowOpacity: 0.2;
      shadowRadius: 4;
    ` // Adiciona sombra no iOS
  }
`;

export const TextInputWithIcon = styled.TextInput`
  font-size: 20px;
  width:90%;
  color: #858585;
`;

export const IconWrapper = styled.View`
  width:10%;

`;

export const Icon = styled(Ionicons)`
  font-size: 20px;
  color: #858585;
`;
