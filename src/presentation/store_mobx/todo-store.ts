import {Todo} from '../../core/entities/todo';
import {TodoUseCases} from '../../core/use-cases/todo-usecase';
import {action, makeAutoObservable, observable, runInAction} from 'mobx';

export class TodoStore {
  todos: Todo[] = [];
  loading = false;

  constructor(private readonly useCases: TodoUseCases) {
    makeAutoObservable(this, {
      addTodo: action,
      loadTodos: action,
      toggleTodo: action,
      loading: observable,
      todos: observable,
    });
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
    console.log('🚀 ~ TodoStore ~ title:', title);
    const newTodo = await this.useCases.addTodo(title);
    runInAction(() => {
      this.todos = [...this.todos, newTodo];
    });
  }

  async toggleTodo(id: string) {
    await this.useCases.toggleTodo(id);
    runInAction(() => {
      const indexTodo = this.todos.findIndex(t => t.id === id);
      const todosProgress = [...this.todos];
      if (indexTodo > -1) {
        todosProgress[indexTodo].completed =
          !todosProgress[indexTodo].completed;
        this.todos = todosProgress;
      }
    });
  }

  async deleteTodo(id: string) {
    console.log({
      todos: this.todos,
      id,
    });
    await this.useCases.deleteTodo(id);

    runInAction(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }
}
