import {appColors} from '@common/constants/appColors';
import {fontFamilies} from '@common/constants/fontFamily';
import {wp} from '@common/constants/response-size-screen';
import Spacing from '@common/constants/spacing';
import {SpaceComponent} from '@presentation/components';
import {
  ButtonComponent,
  Row,
  TextComponent,
} from '@presentation/components/share';
import InputComponent from '@presentation/components/share/input/InputComponent';
import ScreenV2Component from '@presentation/components/share/screen-v2-component';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import useLoginV2Controller from './controller-v2';
import {CONTENT} from '@common/constants/content';
import InputPassword from '@presentation/components/share/input/input-password';

const LoginScreenV2 = () => {
  const {
    values: {username, keyboardHeight, isPressedContinue, password},
    actions: {handleSetUsername, handlePressContinue, handleSetPassword},
  } = useLoginV2Controller();

  return (
    <ScreenV2Component>
      <View style={styles.container}>
        <TextComponent
          style={{textAlign: 'center'}}
          fontfamily={fontFamilies.bold}
          size={26}>
          {CONTENT.intro}
        </TextComponent>
        <SpaceComponent height={12} />
        <InputComponent
          placeholder={CONTENT.intro}
          border={{
            borderWidth: 0,
            borderRadius: 0,
            borderWidthBottom: 1,
          }}
          value={username}
          onChangeText={handleSetUsername}
          style={{color: appColors.white}}
          editable={!isPressedContinue}
        />
        <SpaceComponent height={8} />
        {isPressedContinue && (
          <InputPassword
            password={password}
            handleSetPassword={handleSetPassword}
          />
        )}
      </View>
      <Row
        styles={{paddingHorizontal: Spacing(8)}}
        justifyContent="space-between"
        alignContent="center">
        <TextComponent
          fontfamily={fontFamilies.medium}
          style={{alignSelf: 'center'}}
          size={18}>
          Quên mật khẩu?
        </TextComponent>
        <ButtonComponent
          label={isPressedContinue ? CONTENT.login : CONTENT.continue}
          onPress={handlePressContinue}
          width={wp('30%')}
          bgColor={username && password ? appColors.white : appColors.disable}
          color={username && password ? appColors.text : appColors.textDisable}
          fontfamily={fontFamilies.bold}
          radius={28}
          paddingVerticalBtn={2.5}
        />
      </Row>
      <SpaceComponent
        height={8 + (Platform.OS === 'ios' ? keyboardHeight : 0)}
      />
    </ScreenV2Component>
  );
};

export default LoginScreenV2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing(8),
  },
});
