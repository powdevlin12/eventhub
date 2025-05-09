import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import useToggleShowPassword from '../../../../common/hooks/useToggleShowPassword';
import {AuthNavigationParamsList} from '../../../navigators/type';
import {SCREEN_NAME} from '../../../../common/constants/screen-name';
import {useLoginUseCase} from '../../../../core/use-cases/login-usecase';

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
  const {login, isLoading} = useLoginUseCase();

  const formLogin = useForm<TFormLogin>({
    resolver: yupResolver(schemaLogin) as any,
    defaultValues: {
      username: 'trandat1@gmail.com',
      password: 'Sgod123@',
    },
  });

  const onSubmit = (data: TFormLogin) => {
    login(
      {
        email: data.username,
        password: data.password,
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

  const handleNavigationRegister = () => {
    navigation.navigate(SCREEN_NAME.REGISTER_SCREEN);
  };

  return {
    values: {
      isShowPassword,
      isPending: isLoading,
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
