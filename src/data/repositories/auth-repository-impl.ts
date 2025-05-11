import {LoginCredentials} from '@core/entities/auth';
import {LoginResponse} from '@core/entities/auth';
import {AuthRepository} from '@core/repositories/auth-repository';
import {API_ROUTE} from '@data/api/client';
import {usePost} from '@data/api/hooks';
import {AuthLocalDataSource} from '@data/datasources/auth-local-data-source';

export class AuthRepositoryImpl implements AuthRepository {
  private readonly loginMutate = usePost<LoginResponse>(API_ROUTE.LOGIN);
  constructor(private readonly localDataSource: AuthLocalDataSource) {}

  login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    return this.loginMutate
      .mutateAsync({
        email: credentials.email,
        password: credentials.password,
      })
      .then(response => {
        this.localDataSource.setAccessToken(
          response.accessToken,
          response.refreshToken,
        );
        return response;
      });
  };
}
