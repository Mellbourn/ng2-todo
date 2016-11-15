import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { List } from 'immutable';

import { addTodoItem, removeTodoItem, toggleDone } from './todo-list.action-creators';
import { AppState } from './app-state';

@Injectable()
export class TodoListService {

  private readonly todoItems: Observable<List<TodoItem>>;

  getTodoList(): Observable<List<TodoItem>> {
    return this.todoItems;
  }

  getItemsLeft(): Observable<number> {
    return (<Observable<List<TodoItem>>>this.store.select('todoItems').do(i => console.log('i', i))).map(s => s.get(0).count());
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
    this.todoItems = <Observable<List<TodoItem>>>store.select('todoItems');
  }

}
