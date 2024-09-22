import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon, {SvgIconNameProps} from '../../../assets/svgs';
import TextComponent, {TextComponentProps} from '../TextComponent';
import Row from '../Row';
import {appColors} from '../../../constants/appColors';
import {Scale, Spacing} from '../../../utils';

type ButtonComponentProps = {
  type?: 'outline' | 'inside';
  label: string;

  prefix?: {
    iconName: SvgIconNameProps;
    size?: number;
    onPress?: () => void;
  };
  suffix?: {
    iconName: SvgIconNameProps;
    size?: number;
    onPress?: () => void;
  };
  width?: number;
  onPress: () => void;
} & TextComponentProps;

const ButtonComponent = ({
  label,
  prefix,
  suffix,
  type = 'inside',
  width,
  onPress,
  ...rest
}: ButtonComponentProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: type === 'outline' ? appColors.white : appColors.primary,
      borderRadius: Scale(15),
      paddingVertical: Spacing(4),
      width: width ?? '100%',
      alignSelf: 'center',
      borderWidth: type === 'inside' ? 0 : 1,
      borderColor: type === 'inside' ? appColors.primary : appColors.grayStart,
    },
    prefix: {
      position: 'absolute',
      left: Spacing(4),
      top: 0,
      bottom: 0,
      justifyContent: 'center',
    },
    suffix: {
      position: 'absolute',
      right: Spacing(4),
      top: 0,
      bottom: 0,
      justifyContent: 'center',
    },
  });
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Row justifyContent="center">
        {prefix && (
          <TouchableOpacity style={styles.prefix} onPress={prefix?.onPress}>
            <Icon name={prefix.iconName} size={prefix?.size ?? 20} />
          </TouchableOpacity>
        )}
        <TextComponent
          color={type === 'inside' ? appColors.white : appColors.text}
          {...rest}>
          {label}
        </TextComponent>
        {suffix && (
          <TouchableOpacity style={styles.suffix} onPress={suffix?.onPress}>
            <Icon name={suffix.iconName} size={suffix?.size ?? 20} />
          </TouchableOpacity>
        )}
      </Row>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
