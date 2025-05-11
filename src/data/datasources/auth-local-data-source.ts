import {
  getDataAsyncStorage,
  remoteDataAsyncStorage,
  storeDataAsyncStorage,
} from '@common/utils/async-storage';

export class AuthLocalDataSource {
  static readonly TOKEN_LOCAL = 'tokenLocal';
  static instance: AuthLocalDataSource;

  async getAccessToken(): Promise<string | null> {
    try {
      const accessToken = await getDataAsyncStorage(
        AuthLocalDataSource.TOKEN_LOCAL,
      );
      const token = accessToken ? JSON.parse(accessToken) : null;
      return token;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async setAccessToken(
    accessToken: string,
    refreshToken: string,
  ): Promise<void> {
    await storeDataAsyncStorage(
      AuthLocalDataSource.TOKEN_LOCAL,
      JSON.stringify({
        accessToken,
        refreshToken,
      }),
    );
  }

  async removeAccessToken(): Promise<void> {
    await remoteDataAsyncStorage(AuthLocalDataSource.TOKEN_LOCAL);
  }

  static getInstance(): AuthLocalDataSource {
    if (!AuthLocalDataSource.instance) {
      AuthLocalDataSource.instance = new AuthLocalDataSource();
    }
    return AuthLocalDataSource.instance;
  }
}
