export class Todo {
  constructor(
    public readonly id: string,
    public title: string,
    public completed: boolean,
  ) {}

  toggle() {
    this.completed = !this.completed;
  }
}
