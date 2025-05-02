import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {API_ROUTE} from '../../../../data/api/client';
import {usePost} from '../../../../data/api/hooks';
import {TRegisterResponse} from '../../../../data/api/types';
import {SCREEN_NAME} from '../../../../common/constants/screen-name';
import useToggleShowPassword from '../../../../common/hooks/useToggleShowPassword';
import {AuthNavigationParamsList} from '../../../navigators/type';

export const schemaRegister = yup.object({
  fullname: yup.string().required('Vui lòng nhập tên đầy đủ của bạn'),
  username: yup.string().required('Vui lòng nhập email của bạn'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu của bạn')
    .min(6, 'Mật khẩu ít nhất 6 kí tự'),
  confirmPasword: yup
    .string()
    .required('Vui lòng nhập lại mật khẩu của bạn')
    .oneOf([yup.ref('password'), null], 'Chưa khớp với mật khẩu'),
});

export type TFormRegister = yup.InferType<typeof schemaRegister>;

export type LoginNavigationProps = StackNavigationProp<
  AuthNavigationParamsList,
  'RegisterScreen'
>;
export const useRegisterController = () => {
  const formRegister = useForm<TFormRegister>({
    resolver: yupResolver(schemaRegister) as any,
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const navigation = useNavigation<LoginNavigationProps>();

  const {handleToggleShowPassword, isShowPassword} = useToggleShowPassword();

  const {mutate: mutateRegister, isPending} = usePost<TRegisterResponse>(
    API_ROUTE.REGISTER,
  );

  const onSubmit = (data: TFormRegister) => {
    const {confirmPasword, fullname, password, username} = data;
    mutateRegister(
      {
        name: fullname,
        password,
        confirm_password: confirmPasword,
        email: username.toLowerCase(),
      },
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

  const onError = (err: any) => {
    console.log('🚀 ~ onError ~ err:', err);
  };

  const handleNavigationLogin = () => {
    navigation.navigate(SCREEN_NAME.LOGIN_SCREEN);
  };

  return {
    values: {isShowPassword, isPending},
    actions: {
      handleToggleShowPassword,
      onSubmit,
      onError,
      handleNavigationLogin,
    },
    form: formRegister,
  };
};
