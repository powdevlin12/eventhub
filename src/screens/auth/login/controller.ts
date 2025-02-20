import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {SCREEN_NAME} from '../../../constants/screen-name';
import useToggleShowPassword from '../../../hooks/useToggleShowPassword';
import {AuthNavigationParamsList} from '../../../navigators/type';
import {usePost} from '../../../api/hooks';
import {LoginPost} from '../../../api/types';
import {API_ROUTE} from '../../../api/client';

export const schemaLogin = yup.object({
  username: yup.string().required('Vui lòng nhập email của bạn'),
  password: yup.string().required('Vui lòng nhập mật khẩu của bạn'),
});

export type TFormLogin = yup.InferType<typeof schemaLogin>;

export type LoginNavigationProps = StackNavigationProp<
  AuthNavigationParamsList,
  'LoginScreen'
>;

const useLoginController = () => {
  const navigation = useNavigation<LoginNavigationProps>();
  const {handleToggleShowPassword, isShowPassword} = useToggleShowPassword();

  const formLogin = useForm<TFormLogin>({
    resolver: yupResolver(schemaLogin) as any,
    defaultValues: {
      username: 'trandat1@gmail.com',
      password: 'Sgod123@',
    },
  });

  const {mutate: mutateLogin, isPending} = usePost<LoginPost>(API_ROUTE.LOGIN);

  const onSubmit = (data: TFormLogin) => {
    mutateLogin(
      {email: data.username, password: data.password},
      {
        onError(error) {
          console.log(error.message);
        },
        onSuccess(d) {
          console.log(d);
        },
      },
    );
  };

  const handleNavigationRegister = () => {
    navigation.navigate(SCREEN_NAME.REGISTER_SCREEN);
  };

  return {
    values: {
      isShowPassword,
      isPending,
    },
    actions: {
      handleToggleShowPassword,
      onSubmit,
      handleNavigationRegister,
    },
    form: formLogin,
  };
};

export default useLoginController;
