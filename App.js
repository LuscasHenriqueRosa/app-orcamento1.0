import { StatusBar } from 'expo-status-bar';
import { Container, Content, Logo } from './AppStyle';


export default function App() {
  return (
    <Container>
      <Content>
      <Logo source={require('./assets/lUMACOST-removebg-preview.png')}
      resizeMode="contain"></Logo>
      </Content>
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
