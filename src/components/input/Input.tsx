// input.tsx
import React from 'react';
import {ContainerInput, TextInput} from './InputStyle'; // Importando o estilo

const Input: React.FC = () => {
  return (
    <ContainerInput>
      <TextInput>Hola</TextInput>
    </ContainerInput>
  );
};

export default Input;