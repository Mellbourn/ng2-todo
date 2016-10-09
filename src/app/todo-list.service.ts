import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable()
export class TodoListService {

  private readonly todoItems: TodoItem[];

  getTodoList(): TodoItem[] {
    return this.todoItems;
  }

  constructor() {
    this.todoItems = [
      { text: 'create app', done: false },
      { text: 'upload to github', done: false },
      { text: 'post app on social', done: false }
    ];
  }

}
