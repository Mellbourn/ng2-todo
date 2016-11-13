import { Action } from '@ngrx/store';
import { TodoItem } from './todo-item';

export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';

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
