import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {Row, TextComponent} from '../../components/share';
import {appColors} from '../../constants/appColors';
import {appInfo} from '../../constants/appInfos';
import {gStyle} from '../../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import {Spacing} from '../../utils';

const OnboardingScreen = () => {
  const [index, setIndex] = useState(0);
  const {navigate} = useNavigation();

  const handleNextSlide = () => {
    if (index < 2) {
      setIndex(prev => prev + 1);
    } else {
      navigate('LoginScreen');
    }
  };

  const handleSkipSlide = () => {
    navigate('LoginScreen');
  };

  console.log({index});

  return (
    <View style={[gStyle.containerCommon]}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        index={index}
        activeDotColor={appColors.white}
        onIndexChanged={num => setIndex(num)}
        loop={false}>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/onboarding1.png')}
            resizeMode="cover"
            style={{
              width: appInfo.sizes.WIDTH,
              height: appInfo.sizes.HEIGHT,
            }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/onboarding2.png')}
            resizeMode="cover"
            style={{
              width: appInfo.sizes.WIDTH,
              height: appInfo.sizes.HEIGHT,
            }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/onboarding3.png')}
            resizeMode="cover"
            style={{
              width: appInfo.sizes.WIDTH,
              height: appInfo.sizes.HEIGHT,
            }}
          />
        </View>
      </Swiper>
      <View>
        <Row
          justifyContent="space-between"
          alignContent="center"
          styles={styles.btnNavigate}>
          <TextComponent color={appColors.white} onPress={handleSkipSlide}>
            Skip
          </TextComponent>
          <TextComponent color={appColors.white} onPress={handleNextSlide}>
            Next
          </TextComponent>
        </Row>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNavigate: {
    paddingHorizontal: Spacing(10),
    paddingVertical: Spacing(2),
    position: 'absolute',
    bottom: Spacing(4),
    left: 0,
    right: 0,
  },
});
