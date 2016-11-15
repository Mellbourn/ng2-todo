import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/let';
import '@ngrx/core/add/operator/select';
import { List } from 'immutable';

import { addTodoItem, removeTodoItem, toggleDone } from './todo-list.action-creators';
import { AppState } from './app-state';

@Injectable()
export class TodoListService {

  getTodoList(): Observable<List<TodoItem>> {
    return this.store.map(s => s.get('todoItems'));
  }

  getItemsLeft(): Observable<number> {
    return this.store.map(s => s.get('todoItems').filter(i => !i.done).count());
  }

  removeItem(itemToRemove: TodoItem) {
    this.store.dispatch(removeTodoItem(itemToRemove));
  }

  addItem(itemToAdd: TodoItem) {
    this.store.dispatch(addTodoItem(itemToAdd));
  }

  toggleDone(itemToToggle: TodoItem) {
    this.store.dispatch(toggleDone(itemToToggle));
  }

  constructor(private store: Store<AppState>) {
  }
}
