import { ActionReducer, Action } from '@ngrx/store';
import * as Immutable from 'immutable';

import { TodoItem } from './todo-item';
import { AppState } from './app-state';
import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from './todo-list.action-creators';

const initalTodoItems: Immutable.List<TodoItem> = Immutable.List.of(
  { text: 'create app', done: true },
  { text: 'upload to github', done: false },
  { text: 'post app on social', done: false }
);

export const todoListReducer: ActionReducer<AppState> = (state: AppState = { todoItems: initalTodoItems }, action: Action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      const itemToAdd: TodoItem = action.payload;
      const newTodoItems = state.todoItems.push(itemToAdd);
      return Object.assign({}, state, { todoItems: newTodoItems });
    case REMOVE_TODO_ITEM:
      const itemToRemove: TodoItem = action.payload;
      const indexOfItemToRemove = state.todoItems.lastIndexOf(itemToRemove);
      const splicedArray = state.todoItems.delete(indexOfItemToRemove);
      return Object.assign({}, state, { todoItems: splicedArray });
    default:
      return state;
  }
};
