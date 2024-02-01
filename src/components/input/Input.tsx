// input.tsx
import React from 'react';
import InputStyle from './inputStyle'; // Importando o estilo

const Input: React.FC = () => {
  return (
    <InputStyle.Container>
      <InputStyle.TextStyled>Hola</InputStyle.TextStyled>
    </InputStyle.Container>
  );
};

export default Input;