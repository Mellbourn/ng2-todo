import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { List } from 'immutable';

import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  todoItems: Observable<List<TodoItem>>;
  itemsLeft: Observable<number>;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoItems = this.todoListService.getTodoList();
    this.itemsLeft = this.todoListService.getItemsLeft();
  }

  onRemove(itemToRemove: TodoItem) {
    this.todoListService.removeItem(itemToRemove);
  }

  toggleDone(itemToToggle: TodoItem, event: Event) {
    this.todoListService.toggleDone(itemToToggle);
  }
}
