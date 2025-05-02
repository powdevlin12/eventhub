import {Todo} from '../entities/todo';
import {TodoRepository} from '../repositories/todo-responsitory';

export class TodoUseCases {
  constructor(private readonly repository: TodoRepository) {}

  async getTodos(): Promise<Todo[]> {
    return this.repository.getTodos();
  }

  async addTodo(title: string): Promise<Todo> {
    return this.repository.addTodo(title);
  }

  async toggleTodo(id: string): Promise<void> {
    return this.repository.toggleTodo(id);
  }
}
