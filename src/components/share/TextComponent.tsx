import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {appColors} from '../../constants/appColors';
import {fontFamilies} from '../../constants/fontFamily';

type TextComponentProps = {
  size?: number;
  color?: string;
  children: string;
  fontfamily?: string;
} & TextProps;

const TextComponent = ({
  color = appColors.text,
  size = 16,
  children,
  fontfamily = fontFamilies.semiBold,
  ...rest
}: TextComponentProps) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: size,
      color,
      fontFamily: fontfamily,
    },
  });

  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  );
};

export default TextComponent;
