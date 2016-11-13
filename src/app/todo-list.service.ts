import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { AppState } from './app-state';
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

  constructor(private store: Store<AppState>) {
    this.todoItems = <Observable<TodoItem[]>>store.select('todoItems');
  }

}
