import {useState} from 'react';

const useToggleShowPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleToggleShowPassword = () => {
    setIsShowPassword(prev => !prev);
  };

  return {isShowPassword, handleToggleShowPassword};
};

export default useToggleShowPassword;
