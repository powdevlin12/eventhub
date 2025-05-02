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
import {ACCESS_TOKEN} from './src/common/constants/appKey';
import AuthNavigator from './src/presentation/navigators/AuthNavigator';
import MainNavigator from './src/presentation/navigators/MainNavigator';
import {SplashScreen} from './src/presentation/screens';
import {getDataAsyncStorage} from './src/common/utils/async-storage';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/data/api/hooks';
import {Provider} from 'react-redux';
import {store} from './src/data/store';
import {TodoLocalDataSource} from './src/data/datasources/todo-local-data-source';
import {TodoRepositoryImpl} from './src/data/repositories/todo-repository-impl';
import {TodoUseCases} from './src/core/use-cases/todo-usecase';
import {TodoStore} from './src/data/store_mobx/todo-store';

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
  }, []);

  // ** SET UP CLEAN ARCHITECHTURE
  const dataSource = new TodoLocalDataSource();
  const responsitory = new TodoRepositoryImpl(dataSource);
  const useCases = new TodoUseCases(responsitory);
  const todoStore = new TodoStore(useCases);
  // ** AND SET UP CLEAN ARCHITECHTURE

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
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Provider store={store}>
              {accessToken ? <MainNavigator /> : <AuthNavigator />}
            </Provider>
          </NavigationContainer>
        </QueryClientProvider>
      )}
    </SafeAreaView>
  );
}

export default App;
