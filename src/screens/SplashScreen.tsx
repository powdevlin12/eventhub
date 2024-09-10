import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {appInfo} from '../constants/appInfos';
import {appColors} from '../constants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: appInfo.sizes.WIDTH * 0.7,
        }}
        resizeMode="contain"
      />
      <View style={{marginTop: -24}}>
        <ActivityIndicator size={'large'} color={appColors.gray} />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
