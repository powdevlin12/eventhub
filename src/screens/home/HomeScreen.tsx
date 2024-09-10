import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {remoteDataAsyncStorage} from '../../utils/async-storage';
import {ACCESS_TOKEN} from '../../constants/appKey';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Logout"
        onPress={async () => await remoteDataAsyncStorage(ACCESS_TOKEN)}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
