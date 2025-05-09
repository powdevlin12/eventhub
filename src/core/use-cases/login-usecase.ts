import {useState} from 'react';
import {LoginCallbacks, LoginCredentials} from '../entities/auth';
import {AuthUseCases} from './auth-usecase';
import {useAuthRepository} from '../../data/repositories/auth-repository-impl';

export const useLoginUseCase = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authRepository = useAuthRepository();
  const authUseCases = new AuthUseCases(authRepository);

  const login = async (
    credentials: LoginCredentials,
    callbacks: LoginCallbacks,
  ) => {
    setIsLoading(true);
    try {
      await authUseCases.login(credentials, {
        onSuccess: data => {
          setIsLoading(false);
          callbacks.onSuccess(data);
        },
        onError: error => {
          setIsLoading(false);
          callbacks.onError(error);
        },
      });
    } catch (error) {
      setIsLoading(false);
      callbacks.onError(
        error instanceof Error ? error : new Error('Unknown error'),
      );
    }
  };

  return {
    login,
    isLoading,
  };
};
