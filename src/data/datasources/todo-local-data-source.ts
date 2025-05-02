import {Todo} from '../../core/entities/todo';

export class TodoLocalDataSource {
  private todos: Todo[] = [];

  async getTodos(): Promise<Todo[]> {
    return [...this.todos];
  }

  async addTodo(title: string) {
    const newTodo = new Todo(new Date().toISOString(), title, false);
    this.todos.push(newTodo);
    return newTodo;
  }

  async toggleTodo(id: string) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
