// button.tsx
import React from 'react';
import ButtonStyle from './buttonStyle'; // Importando o estilo

const Button: React.FC = () => {
  return (
    <ButtonStyle.Container>
      <ButtonStyle.TextStyled>Hola</ButtonStyle.TextStyled>
    </ButtonStyle.Container>
  );
};

export default Button;
