import React from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {appColors} from '../../../../common/constants/appColors';
import {Scale, Spacing} from '../../../../common/utils';
import Icon, {SvgIconNameProps} from '../../../assets/svgs';
import Row from '../Row';
import TextComponent, {TextComponentProps} from '../TextComponent';

type ButtonComponentProps = {
  type?: 'outline' | 'inside';
  label: string;
  bgColor?: string;
  radius?: number;
  paddingVerticalBtn?: number;

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
  loading?: boolean;
} & TextComponentProps;

const ButtonComponent = ({
  label,
  prefix,
  suffix,
  type = 'inside',
  width,
  onPress,
  bgColor,
  loading = false,
  paddingVerticalBtn,
  radius,
  ...rest
}: ButtonComponentProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor:
        bgColor ?? (type === 'outline' ? appColors.white : appColors.primary),
      borderRadius: Scale(radius ?? 16),
      paddingVertical: Spacing(paddingVerticalBtn ?? 3),
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
        {!loading ? (
          <TextComponent
            color={
              rest.color ??
              (type === 'inside' ? appColors.white : appColors.text)
            }
            {...rest}>
            {label}
          </TextComponent>
        ) : (
          <ActivityIndicator size={'large'} color={'white'} />
        )}
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
