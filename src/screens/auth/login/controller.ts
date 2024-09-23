import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {SCREEN_NAME} from '../../../constants/screen-name';
import useToggleShowPassword from '../../../hooks/useToggleShowPassword';
import {AuthNavigationParamsList} from '../../../navigators/type';

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
      username: '',
      password: '',
    },
  });

  console.log(formLogin.watch());

  const onSubmit = (data: TFormLogin) => {
    console.log(data);
  };

  const handleNavigationRegister = () => {
    navigation.navigate(SCREEN_NAME.REGISTER_SCREEN);
  };

  return {
    values: {
      isShowPassword,
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
