import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoItem } from '../todo-item';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-item-editor',
  templateUrl: './todo-item-editor.component.html',
  styleUrls: ['./todo-item-editor.component.scss']
})
export class TodoItemEditorComponent implements OnInit {
  todoItemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoList: TodoListService) {
  }

  ngOnInit() {
    this.todoItemForm = this.fb.group({
      text: [''],
      done: [false]
    });
  }

  onSubmit(todoItem: TodoItem): void {
    this.todoList.getTodoList().push({ text: todoItem.text, done: todoItem.done });
    this.todoItemForm.reset();
  }
}
