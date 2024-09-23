import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  ButtonComponent,
  Row,
  ScreenComponent,
  TextComponent,
} from '../../../components/share';
import InputComponent from '../../../components/share/input/InputComponent';
import {appColors} from '../../../constants/appColors';
import {WIDTH} from '../../../constants/dimensions';
import {fontFamilies} from '../../../constants/fontFamily';
import {Spacing} from '../../../utils';
import useLoginController from './controller';

const WIDTH_BUTTON = WIDTH * 0.75;

const LoginScreen = () => {
  const {
    actions: {handleToggleShowPassword, onSubmit, handleNavigationRegister},
    values: {isShowPassword},
    form: {control, handleSubmit},
  } = useLoginController();
  return (
    <ScreenComponent>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/text-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Row
          justifyContent="flex-start"
          styles={{
            marginTop: -Spacing(6),
          }}>
          <TextComponent fullWidth size={20} fontfamily={fontFamilies.medium}>
            Sign in
          </TextComponent>
        </Row>
        <View
          style={{
            width: '100%',
            paddingTop: Spacing(4),
            rowGap: Spacing(4),
            alignContent: 'center',
          }}>
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
            onPress={handleSubmit(onSubmit)}
            width={WIDTH_BUTTON}
            type="outline"
            prefix={{
              iconName: 'Facebook',
              size: 22,
            }}
            fontfamily={fontFamilies.regular}
            size={15}
          />
          <Row justifyContent="center" onPress={handleNavigationRegister}>
            <TextComponent size={14}>Don’t have an account? </TextComponent>
            <TextComponent size={14} color={appColors.primary}>
              Sign up
            </TextComponent>
          </Row>
        </View>
      </View>
    </ScreenComponent>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Spacing(4),
  },
  logo: {
    width: '40%',
  },
});
