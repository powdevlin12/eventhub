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
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScreenV2ComponentProps {
  children: ReactNode;
  onPressLeftAction?: () => void;
}

const sizeLogo = hp('4%');

const ScreenV2Component = ({
  children,
  onPressLeftAction,
}: ScreenV2ComponentProps) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <SpaceComponent height={Platform.OS === 'ios' ? top + 8 : 16} />
      <Row
        justifyContent="center"
        alignContent="center"
        styles={{paddingHorizontal: Spacing(4), position: 'relative'}}>
        <Column
          align="center"
          justify="center"
          style={{position: 'absolute', left: Spacing(4), bottom: 0, top: 0}}
          onPress={() => onPressLeftAction?.()}>
          <TextComponent size={18} fontfamily={fontFamilies.bold}>
            Huỷ
          </TextComponent>
        </Column>
        <Image source={IMAGES.xLogo} style={styles.logo} resizeMode="contain" />
        <View />
      </Row>
      <View style={styles.content}>{children}</View>
      {Platform.OS === 'ios' && <SpaceComponent height={bottom} />}
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
