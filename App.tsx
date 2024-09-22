/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  NativeModules,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import './gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ACCESS_TOKEN} from './src/constants/appKey';
import AuthNavigator from './src/navigators/AuthNavigator';
import MainNavigator from './src/navigators/MainNavigator';
import {SplashScreen} from './src/screens';
import {getDataAsyncStorage} from './src/utils/async-storage';
import codePush from 'react-native-code-push';

const {HelloYt} = NativeModules;

const codePushOptions = {
  checkFrenquency: codePush.CheckFrequency.ON_APP_START,
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log('Hehehe');

  const handleOnPress = () => {
    HelloYt.sayHello('dat', (err: any, message: any) => {
      if (err) {
        return console.log(err);
      }
      console.log('message ', message);
    });
  };

  const [isShowSplash, setIsShowSplash] = useState(true);

  const [accessToken, setAccessToken] = useState('');

  const checkLogin = async () => {
    const token = await getDataAsyncStorage(ACCESS_TOKEN);
    setAccessToken(token ?? '');
    console.log(token);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ** handle code push

  useEffect(() => {
    codePush.sync({
      updateDialog: {
        title: 'New version',
        optionalIgnoreButtonLabel: 'Cancel',
        optionalInstallButtonLabel: 'Install',
        optionalUpdateMessage: 'New version available',
      },
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);
  // ** end handle code push

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <View style={{height: StatusBar.currentHeight, width: '100%'}} />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {accessToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
}

export default codePush(codePushOptions)(App);
