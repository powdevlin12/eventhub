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
import {StyleSheet, View} from 'react-native';
import useLoginV2Controller from './controller-v2';

const CONTENT = {
  intro:
    'Để bắt đầu, trước tiên hãy nhập số điện thoại, email hoặc @tên người dùng của bạn',
  placeholder: 'Số điện thoại, email hoặc tên người dùng',
};

const LoginScreenV2 = () => {
  const {
    values: {username},
    actions: {handleSetUsername},
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
        />
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
          label="Tiếp theo"
          onPress={() => {}}
          width={wp('30%')}
          bgColor={username ? appColors.white : appColors.disable}
          color={username ? appColors.text : appColors.textDisable}
          fontfamily={fontFamilies.bold}
          radius={28}
          paddingVerticalBtn={2.5}
        />
      </Row>
      <SpaceComponent height={8} />
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
