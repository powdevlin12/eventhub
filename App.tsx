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

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigator from './src/navigators/MainNavigator';
import {SplashScreen} from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './src/navigators/HomeNavigator';
import {getDataAsyncStorage} from './src/utils/async-storage';
import {ACCESS_TOKEN} from './src/constants/appKey';

const {HelloYt} = NativeModules;

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

export default App;
