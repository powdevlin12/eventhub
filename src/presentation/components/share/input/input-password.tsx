import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputComponent from './InputComponent';
import {CONTENT} from '@common/constants/content';
import {appColors} from '@common/constants/appColors';

type InputPasswordProps = {
  password: string;
  handleSetPassword: (pw: string) => void;
  placeholder?: string;
};

const InputPassword = ({
  handleSetPassword,
  password,
  placeholder,
}: InputPasswordProps) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  return (
    <InputComponent
      placeholder={placeholder ?? CONTENT.password}
      border={{
        borderWidth: 0,
        borderRadius: 0,
        borderWidthBottom: 1,
      }}
      value={password}
      onChangeText={handleSetPassword}
      style={{color: appColors.white}}
      suffixes={[
        {
          iconName: 'Password',
          onPress: () => setIsHiddenPassword(prev => !prev),
        },
      ]}
      secureTextEntry={isHiddenPassword}
    />
  );
};

export default InputPassword;

const styles = StyleSheet.create({});
