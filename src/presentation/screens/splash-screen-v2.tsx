import {appColors} from '@common/constants/appColors';
import {appInfo} from '@common/constants/appInfos';
import {IMAGES} from '@presentation/assets/images';
import {SpaceComponent} from '@presentation/components';
import React from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';

const SplashScreenV2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.xLogo}
        style={{
          width: appInfo.sizes.WIDTH * 0.3,
          height: appInfo.sizes.WIDTH * 0.3,
        }}
        resizeMode="contain"
      />
      <SpaceComponent height={24} />
      <View>
        <ActivityIndicator size={'large'} color={appColors.white} />
      </View>
    </View>
  );
};

export default SplashScreenV2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.bgPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
