import { Record } from 'immutable';

const TodoItemRecord = Record({
  text: '',
  done: false
});

export class TodoItem extends TodoItemRecord {
  constructor(props: {text: string, done?: boolean}) {
    super(props);
  }
}
