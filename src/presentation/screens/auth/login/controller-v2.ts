import {useKeyboard} from '@common/hooks/use-keyboard';
import {authUseCases} from '@di/auth.di';

import {useState} from 'react';
import {Alert} from 'react-native';

const useLoginV2Controller = () => {
  const [username, setUsername] = useState('trandat1@gmail.com');
  const handleSetUsername = (usernameArg: string) => {
    setUsername(usernameArg);
  };

  const [password, setPassword] = useState('Sgod123@');
  const handleSetPassword = (passwordArg: string) => {
    setPassword(passwordArg);
  };

  const [isPressedContinue, setIsPressedContinue] = useState(false);
  const handlePressContinue = () => {
    setIsPressedContinue(prev => !prev);
  };

  const keyboardHeight = useKeyboard();

  const onSubmit = () => {
    if (!username || !password) {
      Alert.alert('Vui lòng nhập email và mật khẩu');
      return;
    }
    authUseCases.login(
      {
        email: username,
        password: password,
      },
      {
        onError: error => {
          console.log(error.message);
        },
        onSuccess: data => {
          console.log(data);
        },
      },
    );
  };

  return {
    values: {
      username,
      keyboardHeight,
      isPressedContinue,
      password,
    },
    actions: {
      handleSetUsername,
      handlePressContinue,
      handleSetPassword,
      onSubmit,
    },
    refs: {},
  };
};

export default useLoginV2Controller;
