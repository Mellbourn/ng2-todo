import { ActionReducer, Action } from '@ngrx/store';
import { List, Map} from 'immutable';

import { TodoItem } from './todo-item';
import { AppState } from './app-state';
import { ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_ITEM_DONE } from './todo-list.action-creators';

const initalTodoItems: List<TodoItem> = List.of(
  new TodoItem({ text: 'create app', done: true }),
  new TodoItem({ text: 'upload to github', done: false }),
  new TodoItem({ text: 'post app on social', done: false })
);

const initialState: AppState = Map({ todoItems: initalTodoItems });

function addTodoItem(state: AppState, payload: TodoItem): AppState {
  const itemToAdd: TodoItem = payload;
  const todoItems = state.get('todoItems');
  const extendedTodoItems = todoItems.push(itemToAdd);
  return state.set('todoItems', extendedTodoItems);
}

function removeTodoItem(state: AppState, itemToRemove: TodoItem): AppState {
  const todoItems = state.get('todoItems');
  const indexOfItemToRemove = todoItems.indexOf(itemToRemove);
  const splicedArray = todoItems.delete(indexOfItemToRemove);
  return state.set('todoItems', splicedArray);
}

function toggleItemDone(state: AppState, itemToToggle: TodoItem): AppState {
  const todoItems = state.get('todoItems');
  const indexOfItemToToggle = todoItems.indexOf(itemToToggle);
  const toggledItem = itemToToggle.set('done', !itemToToggle.get('done'));
  const newTodoItems = todoItems.set(indexOfItemToToggle, toggledItem);
  return state.set('todoItems', newTodoItems);
}

export const todoListReducer: ActionReducer<AppState> =
  (state = initialState, action: Action) => {
    switch (action.type) {

      case ADD_TODO_ITEM:
        return addTodoItem(state, action.payload);

      case REMOVE_TODO_ITEM:
        return removeTodoItem(state, action.payload);

      case TOGGLE_ITEM_DONE:
        return toggleItemDone(state, action.payload);

      default: ;
        return state;
    }
  };
