import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-item-editor',
  templateUrl: './todo-item-editor.component.html',
  styleUrls: ['./todo-item-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemEditorComponent implements OnInit {
  public text: string;

  constructor(
    private todoList: TodoListService) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (!this.text) {
      return;
    };
    this.todoList.addItem(new TodoItem({ text: this.text }));
    this.text = '';
  }
}
