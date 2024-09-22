import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {storeDataAsyncStorage} from '../../../utils/async-storage';
import {ACCESS_TOKEN} from '../../../constants/appKey';
import {ScreenComponent, TextComponent} from '../../../components/share';
import {fontFamilies} from '../../../constants/fontFamily';

const LoginScreen = () => {
  return (
    <ScreenComponent>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/text-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View>
          <TextComponent>Sign in</TextComponent>
        </View>
        <Button
          title="Login"
          onPress={async () =>
            await storeDataAsyncStorage(ACCESS_TOKEN, 'sadasdsad')
          }
        />
      </View>
    </ScreenComponent>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '40%',
  },
});
