import {SvgProps} from 'react-native-svg';
import {Scale} from '../../utils';
import Mail from './mail.svg';
import Hidden from './hidden.svg';
import Password from './password.svg';
import ShapeRight from './shape-right.svg';
import Google from './google.svg';
import Facebook from './facebook.svg';
import React from 'react';

export const IconName = {
  Mail,
  Hidden,
  Password,
  ShapeRight,
  Google,
  Facebook,
};

export type SvgIconNameProps = keyof typeof IconName;
export type SvgIconProps = {
  name: SvgIconNameProps;
  width?: number;
  height?: number;
  size?: number;
} & SvgProps;

const Icon = ({
  name,
  width = 32,
  height = 32,
  size,
  fill,
  stroke,
  ...rest
}: SvgIconProps) => {
  const IconClone = IconName[name];
  const scaleWidth = size ? Scale(size) : Scale(width);
  const scaleHeight = size ? Scale(size) : Scale(height);
  return (
    <IconClone
      width={scaleWidth}
      height={scaleHeight}
      {...rest}
      {...(fill && {fill})}
      {...(stroke && {stroke})}
    />
  );
};

export default Icon;
