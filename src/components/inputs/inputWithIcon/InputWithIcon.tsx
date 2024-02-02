// InputWithIcon.tsx
import React, { useState } from 'react';
import { ContainerInputWithIcon, TextInputWithIcon, IconWrapper, Icon } from './InputWithIconStyle';
import { TouchableOpacity } from 'react-native';

interface InputWithIconProps {
  placeholder?: string;
  icon?: string; // Nome do ícone (ex: 'ios-person')
  iconColor?: string; // Cor do ícone
  onIconPress?: () => void; // Função chamada quando o ícone é pressionado
  isPasswordVisible?: boolean; // Estado que controla a visibilidade da senha
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  placeholder,
  icon,
  iconColor,
  onIconPress,
  isPasswordVisible,
}) => {
  const [text, setText] = useState('');

  return (
    <ContainerInputWithIcon>
      <IconWrapper>
        {icon && (
          <TouchableOpacity onPress={onIconPress}>
            <Icon name={icon} color={iconColor} />
          </TouchableOpacity>
        )}
      </IconWrapper>
      <TextInputWithIcon
        placeholder={placeholder}
        onChangeText={setText}
        value={text}
        secureTextEntry={isPasswordVisible !== undefined ? !isPasswordVisible : undefined}
      />
    </ContainerInputWithIcon>
  );
};

export default InputWithIcon;
