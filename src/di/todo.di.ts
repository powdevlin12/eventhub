import {TodoUseCases} from '../core/use-cases/todo-usecase';
import {TodoLocalDataSource} from '../data/datasources/todo-local-data-source';
import {TodoRepositoryImpl} from '../data/repositories/todo-repository-impl';
import {TodoStore} from '../presentation/store_mobx/todo-store';

const dataSource = new TodoLocalDataSource();
const responsitory = new TodoRepositoryImpl(dataSource);
const useCases = new TodoUseCases(responsitory);
const todoStore = new TodoStore(useCases);

export {todoStore};
