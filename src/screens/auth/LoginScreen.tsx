import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {storeDataAsyncStorage} from '../../utils/async-storage';
import {ACCESS_TOKEN} from '../../constants/appKey';

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="Login"
        onPress={async () =>
          await storeDataAsyncStorage(ACCESS_TOKEN, 'sadasdsad')
        }
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
