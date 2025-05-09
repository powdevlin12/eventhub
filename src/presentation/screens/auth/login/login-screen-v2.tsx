import {fontFamilies} from '@common/constants/fontFamily';
import Spacing from '@common/constants/spacing';
import {SpaceComponent} from '@presentation/components';
import {Row, TextComponent} from '@presentation/components/share';
import InputComponent from '@presentation/components/share/input/InputComponent';
import ScreenV2Component from '@presentation/components/share/screen-v2-component';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const CONTENT = {
  intro:
    'Để bắt đầu, trước tiên hãy nhập số điện thoại, email hoặc @tên người dùng của bạn',
  placeholder: 'Số điện thoại, email hoặc tên người dùng',
};

const LoginScreenV2 = () => {
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
        />
      </View>
      <Row styles={{paddingHorizontal: Spacing(10)}}>
        <TextComponent fontfamily={fontFamilies.medium}>
          Quên mật khẩu?
        </TextComponent>
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
