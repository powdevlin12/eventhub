import AsyncStorage from '@react-native-async-storage/async-storage';

const storeDataAsyncStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

const getDataAsyncStorage = async (key: string): Promise<string | null> => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const remoteDataAsyncStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

const remoteAllDataAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};

export {
  storeDataAsyncStorage,
  remoteDataAsyncStorage,
  remoteAllDataAsyncStorage,
  getDataAsyncStorage,
};
