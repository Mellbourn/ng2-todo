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

  private state: Store<AppState>;

  getTodoList(): Observable<List<TodoItem>> {
    return this.state.map(s => s.get('todoItems'));
  }

  getItemsLeft(): Observable<number> {
    return this.state.map(s => s.get('todoItems').filter(i => !i.done).count());
  }

  removeItem(itemToRemove: TodoItem) {
    this.state.dispatch(removeTodoItem(itemToRemove));
  }

  addItem(itemToAdd: TodoItem) {
    this.state.dispatch(addTodoItem(itemToAdd));
  }

  toggleDone(itemToToggle: TodoItem) {
    this.state.dispatch(toggleDone(itemToToggle));
  }

  constructor(private store: Store<any>) {
    this.state = <Store<AppState>>store.select('todos');
  }
}
