import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {appColors} from '../../../common/constants/appColors';
import {fontFamilies} from '../../../common/constants/fontFamily';
import {Scale} from '../../../common/utils';

export type TextComponentProps = {
  size?: number;
  color?: string;
  fontfamily?: string;
  fullWidth?: boolean;
  center?: TextStyle['textAlign'];
} & TextProps;

const TextComponent = ({
  color = appColors.textPrimary,
  size = 16,
  fontfamily = fontFamilies.regular,
  fullWidth = false,
  center = 'left',
  style: styleText,
  ...rest
}: TextComponentProps) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: Scale(size),
      color,
      fontFamily: fontfamily,
      width: fullWidth ? '100%' : 'auto',
      textAlign: center,
    },
  });

  return (
    <Text style={[styles.text, styleText]} {...rest}>
      {rest.children}
    </Text>
  );
};

export default TextComponent;
