import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as Immutable from 'immutable';

import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  todoItems: Observable<Immutable.List<TodoItem>>;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoItems = this.todoListService.getTodoList();
  }

  onRemove(itemToRemove: TodoItem) {
    this.todoListService.removeItem(itemToRemove);
  }

  toggleDone(itemToToggle: TodoItem, event: Event) {
    this.todoListService.toggleDone(itemToToggle);
  }
}
