import {LoginCredentials, LoginResponse} from '../../core/entities/auth';
import {AuthRepository} from '../../core/repositories/auth-repository';
import {API_ROUTE} from '../api/client';
import {usePost} from '../api/hooks';

// Custom hook to use auth repository with React hooks
export const useAuthRepository = (): AuthRepository => {
  const {mutateAsync: loginMutate} = usePost<LoginResponse>(API_ROUTE.LOGIN);

  return {
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
      return loginMutate({
        email: credentials.email,
        password: credentials.password,
      });
    },
  };
};
