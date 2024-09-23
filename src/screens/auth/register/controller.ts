import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import useToggleShowPassword from '../../../hooks/useToggleShowPassword';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationParamsList} from '../../../navigators/type';
import {StackNavigationProp} from '@react-navigation/stack';
import {SCREEN_NAME} from '../../../constants/screen-name';

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
const useRegisterController = () => {
  const formRegister = useForm<TFormRegister>({
    resolver: yupResolver(schemaRegister) as any,
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const navigation = useNavigation<LoginNavigationProps>();

  const {handleToggleShowPassword, isShowPassword} = useToggleShowPassword();

  const onSubmit = (data: TFormRegister) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
  };

  const onError = (err: any) => {
    console.log('🚀 ~ onError ~ err:', err);
  };

  const handleNavigationLogin = () => {
    navigation.navigate(SCREEN_NAME.LOGIN_SCREEN);
  };

  return {
    values: {isShowPassword},
    actions: {
      handleToggleShowPassword,
      onSubmit,
      onError,
      handleNavigationLogin,
    },
    form: formRegister,
  };
};

export default useRegisterController;
