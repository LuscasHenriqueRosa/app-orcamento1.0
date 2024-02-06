// buttonStyle.js
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ContainerButton = styled.View`
min-width: 40%;
background: rgba(35, 35, 54, 1);
border-radius: 30px;
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

export const TextStyled = styled.Text`
  font-size: 20px;
  color: #fff;
`;

