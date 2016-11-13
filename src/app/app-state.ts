import { TodoItem } from './todo-item';
import * as Immutable from 'immutable';

export interface AppState {
  todoItems: Immutable.List<TodoItem>;
};
