import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/let';
import '@ngrx/core/add/operator/select';
import { List } from 'immutable';

import { addTodoItem, removeTodoItem, toggleDone } from './todo-list.action-creators';
import { AppState } from './app-state';

@Injectable()
export class TodoListService {

  private todoStore: Store<AppState>;

  private todoItems: Observable<List<TodoItem>>;

  getTodoList(): Observable<List<TodoItem>> {
    return this.todoItems;
  }

  getItemsLeft(): Observable<number> {
    return this.todoItems.map(items => items.count(i => !i.done));
  }

  removeItem(itemToRemove: TodoItem) {
    this.todoStore.dispatch(removeTodoItem(itemToRemove));
  }

  addItem(itemToAdd: TodoItem) {
    this.todoStore.dispatch(addTodoItem(itemToAdd));
  }

  toggleDone(itemToToggle: TodoItem) {
    this.todoStore.dispatch(toggleDone(itemToToggle));
  }

  constructor(private store: Store<any>) {
    this.todoStore = <Store<AppState>>store.select('todos');
    this.todoItems = this.todoStore.map(s => s.get('todoItems'));
  }
}
