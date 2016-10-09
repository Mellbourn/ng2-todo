/* tslint:disable:no-unused-variable */

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../todo-item';

describe('Component: TodoList', () => {
  let todoListServiceMock: TodoListService;
  let todoList: TodoItem[];

  beforeEach(() => {
    todoListServiceMock = jasmine.createSpyObj('TodoListService', ['getTodoList', 'removeItem'])
    todoList = [{ text: 'foo', done: true }, { text: 'bar', done: false }];
    (<jasmine.Spy>todoListServiceMock.getTodoList).and.returnValue(todoList);
    TestBed
      .configureTestingModule({
        imports: [
          FormsModule
        ],
        declarations: [
          TodoListComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          { provide: TodoListService, useValue: todoListServiceMock }
        ]
      });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(TodoListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should list todo items', () => {
    // Arrange
    let fixture = TestBed.createComponent(TodoListComponent);
    let app = fixture.debugElement.componentInstance;

    // Act
    fixture.detectChanges();

    // Assert
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ol').children.length).toBe(todoList.length);
  });

});
