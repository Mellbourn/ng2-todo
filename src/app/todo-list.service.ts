import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable()
export class TodoListService {

  private readonly todoItems: TodoItem[];

  getTodoList(): TodoItem[] {
    return this.todoItems;
  }

  removeItem(itemToRemove: TodoItem) {
    const indexOfItemToRemove = this.todoItems.lastIndexOf(itemToRemove);
    this.todoItems.splice(indexOfItemToRemove, 1);
  }

  addItem(itemToAdd: TodoItem) {
    this.todoItems.push({ text: itemToAdd.text, done: itemToAdd.done });
  }

  constructor() {
    this.todoItems = [
      { text: 'create app', done: true },
      { text: 'upload to github', done: false },
      { text: 'post app on social', done: false }
    ];
  }

}
