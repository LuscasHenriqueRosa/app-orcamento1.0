import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['rgba(98, 98, 217, 1)', 'rgba(157, 98, 217, 1)'],
})`
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  padding: 5%;
`;

export const Content = styled.View`
  margin-top: 15%;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TextStyle = styled.Text`
  font-size: 20px;
  color: #fff;
  justify-content: center; /* A propriedade 'justify-content' geralmente é usada no contêiner pai */
`;


export const Logo = styled.Image`
width: 300px;
height: 300px;

`;