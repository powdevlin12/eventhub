import {Todo} from '../entities/todo';

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
  addTodo(title: string): Promise<Todo>;
  toggleTodo(id: string): Promise<void>;
  deleteTodo(id: string): Promise<void>;
}
