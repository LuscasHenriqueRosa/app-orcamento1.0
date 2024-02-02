import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

 const Container = styled.View`
  flex: 1;
  background-color: #f2f;
  align-items: center;
  justify-content: center;
`;

 const TextStyle = styled.Text`
  font-size: 20px;
  color: #fff;
`;


export default function App() {
  return (
    <Container>
      <TextStyle>Hola</TextStyle>
      <StatusBar style="auto" />
    </Container>
  );
}




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
