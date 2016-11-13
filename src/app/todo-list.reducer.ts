import { ActionReducer, Action } from '@ngrx/store';
import { TodoItem } from './todo-item';
import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from './todo-list.action-creators';

const initalTodoItems: TodoItem[] = [
  { text: 'create app', done: true },
  { text: 'upload to github', done: false },
  { text: 'post app on social', done: false }
];

export const todoListReducer: ActionReducer<TodoItem[]> = (state: TodoItem[] = initalTodoItems, action: Action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      const itemToAdd: TodoItem = action.payload;
      const newTodoItems = state.concat(itemToAdd);
      return newTodoItems;
    case REMOVE_TODO_ITEM:
      const itemToRemove: TodoItem = action.payload;
      const indexOfItemToRemove = state.lastIndexOf(itemToRemove);
      const splicedArray = state.slice();
      splicedArray.splice(indexOfItemToRemove, 1);
      return splicedArray;
    default:
      return state;
  }
};
