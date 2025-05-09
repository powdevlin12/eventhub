import {useKeyboard} from '@common/hooks/use-keyboard';
import {useState} from 'react';

const useLoginV2Controller = () => {
  const [username, setUsername] = useState('');
  const handleSetUsername = (usernameArg: string) => {
    setUsername(usernameArg);
  };

  const [password, setPassword] = useState('');
  const handleSetPassword = (passwordArg: string) => {
    setPassword(passwordArg);
  };

  const [isPressedContinue, setIsPressedContinue] = useState(false);
  const handlePressContinue = () => {
    setIsPressedContinue(prev => !prev);
  };

  const keyboardHeight = useKeyboard();

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
    },
    refs: {},
  };
};

export default useLoginV2Controller;
