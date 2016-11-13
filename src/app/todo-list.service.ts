import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import * as Immutable from 'immutable';

import { addTodoItem, removeTodoItem } from './todo-list.action-creators';

@Injectable()
export class TodoListService {

  private readonly todoItems: Observable<Immutable.List<TodoItem>>;

  getTodoList(): Observable<Immutable.List<TodoItem>> {
    return this.todoItems;
  }

  removeItem(itemToRemove: TodoItem) {
    this.store.dispatch(removeTodoItem(itemToRemove));
  }

  addItem(itemToAdd: TodoItem) {
    this.store.dispatch(addTodoItem(itemToAdd));
  }

  constructor(private store: Store<Immutable.Map<string, Immutable.List<TodoItem>>>) {
    this.todoItems = store.select(s => s.get('todoItems'));
  }

}
