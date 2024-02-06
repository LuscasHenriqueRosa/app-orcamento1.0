import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const ContainerDefault = styled(LinearGradient).attrs({
  colors: ['rgba(98, 98, 217, 1)', 'rgba(157, 98, 217, 1)'],
})`
  flex: 1;
  align-items: center;
  justify-content:center; 
`;

export const ContentDefault = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TextStyleDefault = styled.Text`
  font-size: 20px;
  color: #fff;
  justify-content: center; 
`;
