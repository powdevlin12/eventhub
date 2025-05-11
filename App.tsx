/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  NativeModules,
  Platform,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import './gesture-handler';

import {appColors} from '@common/constants/appColors';
import {Scale} from '@common/utils';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {ACCESS_TOKEN} from './src/common/constants/appKey';
import {getDataAsyncStorage} from './src/common/utils/async-storage';
import {queryClient} from './src/data/api/hooks';
import AuthNavigator from './src/presentation/navigators/AuthNavigator';
import MainNavigator from './src/presentation/navigators/MainNavigator';
import {SplashScreen} from './src/presentation/screens';
import {store} from './src/presentation/store';
import SplashScreenV2 from '@presentation/screens/splash-screen-v2';

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
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    checkLogin();
  }, []);

  const isIos = Platform.OS === 'ios';
  const Container = isIos ? View : SafeAreaView;

  return (
    <Container style={{flex: 1}}>
      {isIos ? (
        <View
          style={{
            height: Scale(48),
            backgroundColor: appColors.bgPrimary,
          }}
        />
      ) : (
        <StatusBar
          animated
          hidden={false}
          barStyle={'light-content'}
          translucent={false}
          backgroundColor={appColors.bgPrimary}
        />
      )}
      {isShowSplash ? (
        <SplashScreenV2 />
      ) : (
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Provider store={store}>
              {accessToken ? <MainNavigator /> : <AuthNavigator />}
            </Provider>
          </NavigationContainer>
        </QueryClientProvider>
      )}
    </Container>
  );
}

export default App;
