import { ActionReducer, Action } from '@ngrx/store';
import * as Immutable from 'immutable';

import { TodoItem } from './todo-item';
import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from './todo-list.action-creators';

const initalTodoItems: Immutable.List<TodoItem> = Immutable.List.of(
  { text: 'create app', done: true },
  { text: 'upload to github', done: false },
  { text: 'post app on social', done: false }
);

const initialState = Immutable.Map({ todoItems: initalTodoItems });

export const todoListReducer: ActionReducer<Immutable.Map<string, Immutable.List<TodoItem>>> =
  (state = initialState, action: Action) => {
    switch (action.type) {
      case ADD_TODO_ITEM:
        const itemToAdd: TodoItem = action.payload;
        const todoItems = state.get('todoItems').push(itemToAdd);
        return state.set('todoItems', todoItems);
      case REMOVE_TODO_ITEM:
        const itemToRemove: TodoItem = action.payload;
        const indexOfItemToRemove = state.get('todoItems').lastIndexOf(itemToRemove);
        const splicedArray = state.get('todoItems').delete(indexOfItemToRemove);
        return state.set('todoItems', splicedArray);
      default:
        return state;
    }
  };
