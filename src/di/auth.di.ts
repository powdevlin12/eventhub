import {AuthUseCases} from '@core/use-cases/auth-usecase';
import {AuthLocalDataSource} from '@data/datasources/auth-local-data-source';
import {AuthRepositoryImpl} from '@data/repositories/auth-repository-impl';

const authLocalDataSource = new AuthLocalDataSource();
const authRepository = new AuthRepositoryImpl(authLocalDataSource);
const authUseCases = new AuthUseCases(authRepository);

export {authUseCases};
