import {Todo} from '../../core/entities/todo';
import {TodoUseCases} from '../../core/use-cases/todo-usecase';
import {makeAutoObservable, runInAction} from 'mobx';

export class TodoStore {
  todos: Todo[] = [];
  loading = false;

  constructor(private readonly useCases: TodoUseCases) {
    makeAutoObservable(this);
    this.loadTodos();
  }

  async loadTodos() {
    this.loading = true;
    try {
      const todos = await this.useCases.getTodos();
      runInAction(() => {
        this.todos = todos;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async addTodo(title: string) {
    const newTodo = await this.useCases.addTodo(title);
    runInAction(() => {
      this.todos.push(newTodo);
    });
  }

  async toggleTodo(id: string) {
    await this.useCases.toggleTodo(id);
    runInAction(() => {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.toggle();
      }
    });
  }
}
