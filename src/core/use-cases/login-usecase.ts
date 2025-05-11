import {LoginCallbacks, LoginCredentials} from '../entities/auth';
import {AuthUseCases} from './auth-usecase';
import {AuthRepository} from '../repositories/auth-repository';

export const useLoginUseCase = (repository: AuthRepository) => {
  const authUseCases = new AuthUseCases(repository);

  const login = async (
    credentials: LoginCredentials,
    callbacks: LoginCallbacks,
  ) => {
    try {
      await authUseCases.login(credentials, {
        onSuccess: data => {
          callbacks.onSuccess(data);
        },
        onError: error => {
          callbacks.onError(error);
        },
      });
    } catch (error) {
      callbacks.onError(
        error instanceof Error ? error : new Error('Unknown error'),
      );
    }
  };

  return {
    login,
  };
};
