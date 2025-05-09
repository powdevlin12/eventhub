import {useState} from 'react';

const useLoginV2Controller = () => {
  const [username, setUsername] = useState('');
  console.log('🚀 ~ useLoginV2Controller ~ username:', username);
  const handleSetUsername = (usernameArg: string) => {
    setUsername(usernameArg);
  };

  return {
    values: {
      username,
    },
    actions: {
      handleSetUsername,
    },
    refs: {},
  };
};

export default useLoginV2Controller;
