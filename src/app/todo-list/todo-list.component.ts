import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoItems: TodoItem[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoItems = this.todoListService.getTodoList();
  }

}
