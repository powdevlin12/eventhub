import {useState} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const schemaLogin = yup.object({
  username: yup.string().required('Vui lòng nhập email của bạn'),
  password: yup.string().required('Vui lòng nhập mật khẩu của bạn'),
});

export type TFormLogin = yup.InferType<typeof schemaLogin>;

const useLoginController = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setIsShowPassword(prev => !prev);
  };

  const formLogin = useForm<TFormLogin>({
    resolver: yupResolver(schemaLogin) as any,
    defaultValues: {
      username: '',
      password: '',
    },
  });

  console.log(formLogin.watch());

  const onSubmit = (data: TFormLogin) => {
    console.log(data);
  };

  return {
    values: {
      isShowPassword,
    },
    actions: {
      handleToggleShowPassword,
      onSubmit,
    },
    form: formLogin,
  };
};

export default useLoginController;
