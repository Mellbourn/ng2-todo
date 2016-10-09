/* tslint:disable:no-unused-variable */

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoListService } from '../todo-list.service';

describe('Component: TodoList', () => {
  let todoListServiceMock: TodoListService;

  beforeEach(() => {
    todoListServiceMock = jasmine.createSpyObj('TodoListService', ['getTodoList', 'removeItem'])
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
});
