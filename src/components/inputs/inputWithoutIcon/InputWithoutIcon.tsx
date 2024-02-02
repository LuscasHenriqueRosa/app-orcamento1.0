// InputWithoutIcon.tsx
import React, { useState } from 'react';
import { ContainerInputWithoutIcon, TextInputWithoutIcon } from './InputWithoutIconStyle';

interface InputWithoutIconProps {
  placeholder?: string;
}

const InputWithoutIcon: React.FC<InputWithoutIconProps> = ({ placeholder }) => {
  const [text, setText] = useState('');

  return (
    <ContainerInputWithoutIcon>
      <TextInputWithoutIcon
        placeholder={placeholder}
        onChangeText={setText}
        value={text}
      />
    </ContainerInputWithoutIcon>
  );
};

export default InputWithoutIcon;
