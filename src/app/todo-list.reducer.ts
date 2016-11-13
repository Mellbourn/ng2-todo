import { ActionReducer, Action } from '@ngrx/store';
import { TodoItem } from './todo-item';
import {ADD_TODO_ITEM, REMOVE_TODO_ITEM} from './todo-list.action-creators';

export interface AppState {
  todoItems: TodoItem[];
};

export const todoListReducer: ActionReducer<AppState> = (state: AppState = { todoItems: [] }, action: Action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      const itemToAdd: TodoItem = action.payload;
      const newTodoItems = state.todoItems.concat(itemToAdd);
      return Object.assign({}, state, { todoItems: newTodoItems });
    case REMOVE_TODO_ITEM:
      const itemToRemove: TodoItem = action.payload;
      const indexOfItemToRemove = state.todoItems.lastIndexOf(itemToRemove);
      const newArray = state.todoItems.slice();
      const splicedArray = newArray.splice(indexOfItemToRemove, 1);
      return Object.assign({}, state, { todoItems: splicedArray });
    default:
      return state;
  }
};
