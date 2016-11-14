/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoItem } from '../todo-item';
import { TodoListService } from '../todo-list.service';

import { TodoItemEditorComponent } from './todo-item-editor.component';

describe('Component: TodoItemEditor', () => {
  let fbMock: FormBuilder;
  let todoListMock: TodoListService;
  let todoItemFormMock: FormGroup;

  beforeEach(() => {
    fbMock = jasmine.createSpyObj('fb', ['group']);
    todoItemFormMock = jasmine.createSpyObj('todoItemForm', ['reset']);
    (<jasmine.Spy>fbMock.group).and.returnValue(todoItemFormMock);

    todoListMock = jasmine.createSpyObj('todoList', ['getTodoList']);
  });

  it('should create an instance', () => {
    let component = new TodoItemEditorComponent(fbMock, todoListMock);
    expect(component).toBeTruthy();
  });

  it('should push item on submit', () => {
    // Arrange
    let todoList: List<TodoItem> = [];
    let todoItem: TodoItem = { text: 'foo', done: false };
    (<jasmine.Spy>todoListMock.getTodoList).and.returnValue(todoList);

    let component = new TodoItemEditorComponent(fbMock, todoListMock);
    component.ngOnInit();

    // Act
    component.onSubmit(todoItem);

    // Assert
    expect(todoListMock.getTodoList).toHaveBeenCalledWith();
    expect(todoList).toContain(todoItem);
  });
});
