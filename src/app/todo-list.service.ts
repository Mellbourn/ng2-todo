import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { addTodoItem, removeTodoItem } from './todo-list.action-creators';

@Injectable()
export class TodoListService {

  private readonly todoItems: Observable<TodoItem[]>;

  getTodoList(): Observable<TodoItem[]> {
    return this.todoItems;
  }

  removeItem(itemToRemove: TodoItem) {
    this.store.dispatch(removeTodoItem(itemToRemove));
  }

  addItem(itemToAdd: TodoItem) {
    this.store.dispatch(addTodoItem(itemToAdd));
  }

  constructor(private store: Store<TodoItem[]>) {
    this.todoItems = store;
  }

}
