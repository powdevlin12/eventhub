import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {appColors} from '../../constants/appColors';

type TextComponentProps = {
  size?: number;
  color?: string;
  font?: TextStyle['fontWeight'];
  children: string;
} & TextProps;

const TextComponent = ({
  color = appColors.text,
  font = 'normal',
  size = 16,
  children,
  ...rest
}: TextComponentProps) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: size,
      color,
      fontWeight: font,
    },
  });

  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  );
};

export default TextComponent;
