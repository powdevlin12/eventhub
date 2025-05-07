import {
  getDataAsyncStorage,
  remoteDataAsyncStorage,
  storeDataAsyncStorage,
} from '../../common/utils/async-storage';
import {Todo} from '../../core/entities/todo';

export class TodoLocalDataSource {
  private todos: Todo[] = [];
  static TODOS_LOCAL = 'todosLocal';

  async getTodos(): Promise<Todo[]> {
    const todosLocalString = await getDataAsyncStorage(
      TodoLocalDataSource.TODOS_LOCAL,
    );
    const todosLocal = todosLocalString ? JSON.parse(todosLocalString) : [];
    this.todos = todosLocal;
    return todosLocal;
  }

  async addTodo(title: string) {
    const newTodo = new Todo(new Date().toISOString(), title, false);
    this.todos = [...this.todos, newTodo];
    await storeDataAsyncStorage(
      TodoLocalDataSource.TODOS_LOCAL,
      JSON.stringify(this.todos),
    );
    return newTodo;
  }

  async toggleTodo(id: string) {
    const indexTodo = this.todos.findIndex(t => t.id === id);
    if (indexTodo > -1) {
      this.todos[indexTodo].completed = !this.todos[indexTodo].completed;
      await remoteDataAsyncStorage(TodoLocalDataSource.TODOS_LOCAL);
      await storeDataAsyncStorage(
        TodoLocalDataSource.TODOS_LOCAL,
        JSON.stringify(this.todos),
      );
    }
  }

  async deleteTodo(id: string) {
    await remoteDataAsyncStorage(TodoLocalDataSource.TODOS_LOCAL);
    this.todos = this.todos.filter(todo => todo.id !== id);
    await storeDataAsyncStorage(
      TodoLocalDataSource.TODOS_LOCAL,
      JSON.stringify(this.todos),
    );
  }
}
