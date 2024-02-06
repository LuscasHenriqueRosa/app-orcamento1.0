// button.tsx
import React, { useState } from 'react';
import {ContainerButton, TextStyled} from './buttonStyle'; // Importando o estilo
import { TouchableOpacity } from 'react-native';


interface ButtonDefaultProps{
  title?: string;
  
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  title,

}) => {

  return (
    <ContainerButton>
          <TouchableOpacity>
           <TextStyled>{title}</TextStyled>
          </TouchableOpacity>
    </ContainerButton>
  );
};

export default ButtonDefault;
