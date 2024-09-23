import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ButtonComponent,
  Row,
  ScreenComponent,
  TextComponent,
} from '../../../components/share';
import InputComponent from '../../../components/share/input/InputComponent';
import {fontFamilies} from '../../../constants/fontFamily';
import {Spacing} from '../../../utils';
import useRegisterController from './controller';
import {appColors} from '../../../constants/appColors';
import {WIDTH} from '../../../constants/dimensions';
import {SCREEN_NAME} from '../../../constants/screen-name';

const WIDTH_BUTTON = WIDTH * 0.75;

const Register = () => {
  const {
    form: {control, handleSubmit},
    values: {isShowPassword},
    actions: {
      handleToggleShowPassword,
      onError,
      onSubmit,
      handleNavigationLogin,
    },
  } = useRegisterController();
  return (
    <ScreenComponent back={SCREEN_NAME.LOGIN_SCREEN}>
      <View style={styles.container}>
        <TextComponent fontfamily={fontFamilies.medium} size={20}>
          Sign up
        </TextComponent>
        <InputComponent
          placeholder="Full name"
          prefixes={[
            {
              iconName: 'Profile',
            },
          ]}
          control={control}
          name="fullname"
        />
        <InputComponent
          placeholder="abc@gmail.com"
          prefixes={[
            {
              iconName: 'Mail',
            },
          ]}
          control={control}
          name="username"
        />
        <InputComponent
          placeholder="Your password"
          prefixes={[
            {
              iconName: 'Password',
            },
          ]}
          suffixes={[
            {
              iconName: 'Hidden',
              onPress: handleToggleShowPassword,
            },
          ]}
          secureTextEntry={isShowPassword}
          control={control}
          name="password"
        />
        <InputComponent
          placeholder="Confirm password"
          prefixes={[
            {
              iconName: 'Password',
            },
          ]}
          suffixes={[
            {
              iconName: 'Hidden',
              onPress: handleToggleShowPassword,
            },
          ]}
          secureTextEntry={isShowPassword}
          control={control}
          name="confirmPasword"
        />
        <ButtonComponent
          label="SIGN IN"
          onPress={handleSubmit(onSubmit)}
          width={WIDTH_BUTTON}
          suffix={{
            iconName: 'ShapeRight',
            size: 20,
          }}
          fontfamily={fontFamilies.medium}
        />
        <TextComponent
          color={appColors.gray}
          fontfamily={fontFamilies.medium}
          fullWidth
          size={18}
          center="center">
          OR
        </TextComponent>
        <ButtonComponent
          label="Login with Google"
          onPress={handleSubmit(onSubmit)}
          width={WIDTH_BUTTON}
          type="outline"
          prefix={{
            iconName: 'Google',
            size: 22,
          }}
          fontfamily={fontFamilies.regular}
          size={15}
        />
        <ButtonComponent
          label="Login with Facebook"
          onPress={handleSubmit(onSubmit, onError)}
          width={WIDTH_BUTTON}
          type="outline"
          prefix={{
            iconName: 'Facebook',
            size: 22,
          }}
          fontfamily={fontFamilies.regular}
          size={15}
        />
        <Row justifyContent="center" onPress={handleNavigationLogin}>
          <TextComponent size={14}>Already have an account? </TextComponent>
          <TextComponent size={14} color={appColors.primary}>
            Sign in
          </TextComponent>
        </Row>
      </View>
    </ScreenComponent>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingTop: Spacing(4),
    paddingHorizontal: Spacing(4),
    rowGap: Spacing(4),
  },
});
