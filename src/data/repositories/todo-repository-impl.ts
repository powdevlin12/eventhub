import {Todo} from '../../core/entities/todo';
import {TodoRepository} from '../../core/repositories/todo-responsitory';
import {TodoLocalDataSource} from '../datasources/todo-local-data-source';

export class TodoRepositoryImpl implements TodoRepository {
  constructor(private readonly dataSource: TodoLocalDataSource) {}

  async getTodos(): Promise<Todo[]> {
    return this.dataSource.getTodos();
  }

  async addTodo(title: string): Promise<Todo> {
    return this.dataSource.addTodo(title);
  }

  async toggleTodo(id: string): Promise<void> {
    return this.dataSource.toggleTodo(id);
  }
}
