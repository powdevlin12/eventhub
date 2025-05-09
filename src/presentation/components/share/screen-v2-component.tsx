import {appColors} from '@common/constants/appColors';
import {fontFamilies} from '@common/constants/fontFamily';
import {hp} from '@common/constants/response-size-screen';
import {IMAGES} from '@presentation/assets/images';
import React, {ReactNode} from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import Row from './Row';
import TextComponent from './TextComponent';
import Column from './column';
import {Spacing} from '@common/utils';
import SpaceComponent from '../SpaceComponent';

interface ScreenV2ComponentProps {
  children: ReactNode;
}

const sizeLogo = hp('4%');

const ScreenV2Component = ({children}: ScreenV2ComponentProps) => {
  return (
    <View style={styles.container}>
      <SpaceComponent height={Spacing(4)} />
      <Row
        justifyContent="center"
        alignContent="center"
        styles={{paddingHorizontal: Spacing(4), position: 'relative'}}>
        <Column
          align="center"
          justify="center"
          style={{position: 'absolute', left: Spacing(4), bottom: 0, top: 0}}>
          <TextComponent size={18} fontfamily={fontFamilies.bold}>
            Huỷ
          </TextComponent>
        </Column>
        <Image source={IMAGES.xLogo} style={styles.logo} resizeMode="contain" />
        <View />
      </Row>
      <View style={styles.content}>{children}</View>
      {Platform.OS === 'ios' && <SpaceComponent height={20} />}
    </View>
  );
};

export default ScreenV2Component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.bgPrimary,
  },
  logo: {
    width: sizeLogo,
    height: sizeLogo,
  },
  content: {
    flex: 1,
  },
});
