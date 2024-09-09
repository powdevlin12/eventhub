/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NativeModules, useColorScheme} from 'react-native';
import './gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigator from './src/navigators/MainNavigator';
import {SplashScreen} from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
