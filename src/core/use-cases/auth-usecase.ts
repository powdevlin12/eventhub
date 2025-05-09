import {LoginCallbacks, LoginCredentials} from '../entities/auth';
import {AuthRepository} from '../repositories/auth-repository';

export class AuthUseCases {
  constructor(private readonly repository: AuthRepository) {}

  async login(
    credentials: LoginCredentials,
    callbacks: LoginCallbacks,
  ): Promise<void> {
    try {
      const response = await this.repository.login(credentials);
      callbacks.onSuccess(response);
    } catch (error) {
      callbacks.onError(
        error instanceof Error ? error : new Error('Unknown error'),
      );
    }
  }
}
