import { Action } from '@ngrx/store';
import { TodoItem } from './todo-item';

export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';
export const TOGGLE_ITEM_DONE = 'TOGGLE_ITEM_DONE';

export function addTodoItem(todoItem: TodoItem): Action {
  return {
    type: ADD_TODO_ITEM,
    payload: todoItem
  };
}

export function removeTodoItem(todoItem: TodoItem): Action {
  return {
    type: REMOVE_TODO_ITEM,
    payload: todoItem
  };
}

export function toggleDone(todoItem: TodoItem): Action {
  return {
    type: TOGGLE_ITEM_DONE,
    payload: todoItem
  }
}
