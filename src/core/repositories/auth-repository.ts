import {LoginCredentials, LoginResponse} from '../entities/auth';

export interface AuthRepository {
  login(credentials: LoginCredentials): Promise<LoginResponse>;
}
