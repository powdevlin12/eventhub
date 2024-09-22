import React from 'react';
import {Control, Controller, FieldPath, FieldValues} from 'react-hook-form';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon, {SvgIconNameProps} from '../../../assets/svgs';
import {appColors} from '../../../constants/appColors';
import {fontFamilies} from '../../../constants/fontFamily';
import {Scale, Spacing} from '../../../utils';
import Row from '../Row';
import TextComponent from '../TextComponent';

interface InputComponentProps<T extends FieldValues> extends TextInputProps {
  prefixes?: {
    iconName: SvgIconNameProps;
    size?: number;
    onPress?: () => void;
  }[];
  suffixes?: {
    iconName: SvgIconNameProps;
    size?: number;
    onPress?: () => void;
  }[];
  control?: Control<T>;
  name?: FieldPath<T>;
  value?: string;
  onChange?: () => void;
}

const InputComponent = <T extends FieldValues>({
  prefixes,
  suffixes,
  name,
  control,
  value,
  onChange,
  ...rest
}: InputComponentProps<T>) => {
  if (!control) {
    return (
      <Row
        styles={styles.container}
        alignContent="center"
        justifyContent="center">
        {/* @ts-ignore */}
        {prefixes?.map(prefix => {
          return (
            <TouchableOpacity
              onPress={prefix.onPress ?? undefined}
              key={prefix.iconName}
              style={{
                justifyContent: 'center',
                paddingHorizontal: Spacing(2),
              }}>
              <Icon name={prefix.iconName} size={prefix.size ?? Scale(26)} />
            </TouchableOpacity>
          );
        })}
        {/* @ts-ignore */}
        <TextInput
          style={styles.input}
          placeholderTextColor={appColors.gray}
          selectionColor="gray"
          onChangeText={onChange}
          value={value}
          {...rest}
        />
        {/* @ts-ignore */}
        {suffixes?.map(suffix => {
          return (
            <TouchableOpacity
              onPress={suffix.onPress}
              key={suffix.iconName}
              style={{
                justifyContent: 'center',
                paddingHorizontal: Spacing(2),
              }}>
              <Icon name={suffix.iconName} size={suffix.size ?? Scale(26)} />
            </TouchableOpacity>
          );
        })}
      </Row>
    );
  }
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View style={{rowGap: Spacing(1)}}>
          <Row
            styles={styles.container}
            alignContent="center"
            justifyContent="center">
            {/* @ts-ignore */}
            {prefixes?.map(prefix => {
              return (
                <TouchableOpacity
                  onPress={prefix.onPress ?? undefined}
                  key={prefix.iconName}
                  style={{
                    justifyContent: 'center',
                    paddingHorizontal: Spacing(2),
                  }}>
                  <Icon
                    name={prefix.iconName}
                    size={prefix.size ?? Scale(26)}
                  />
                </TouchableOpacity>
              );
            })}
            {/* @ts-ignore */}
            <TextInput
              style={styles.input}
              placeholderTextColor={appColors.gray}
              selectionColor="gray"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              {...rest}
            />
            {/* @ts-ignore */}
            {suffixes?.map(suffix => {
              return (
                <TouchableOpacity
                  onPress={suffix.onPress}
                  key={suffix.iconName}
                  style={{
                    justifyContent: 'center',
                    paddingHorizontal: Spacing(2),
                  }}>
                  <Icon
                    name={suffix.iconName}
                    size={suffix.size ?? Scale(26)}
                  />
                </TouchableOpacity>
              );
            })}
          </Row>
          {error && (
            <Row styles={{paddingLeft: Spacing(4)}}>
              <TextComponent color={appColors.errorStart} size={12}>
                {error?.message ?? ''}
              </TextComponent>
            </Row>
          )}
        </View>
      )}
      // @ts-ignore
      name={name}
    />
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E4DFDF',
    borderRadius: Scale(12),
  },
  input: {
    flex: 1,
    fontFamily: fontFamilies.regular,
    fontSize: Scale(14),
  },
});
