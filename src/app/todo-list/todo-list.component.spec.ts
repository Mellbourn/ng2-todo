/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
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
    (<jasmine.Spy>todoListServiceMock.removeItem).and.callFake((item: TodoItem) => {
      todoList.splice(todoList.indexOf(item), 1);
      return todoList;
    });
    TestBed
      .configureTestingModule({
        imports: [
          FormsModule
        ],
        declarations: [
          TodoListComponent
        ],
        schemas: [NO_ERRORS_SCHEMA],
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

    // Act
    fixture.detectChanges();

    // Assert
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ol').children.length).toBe(todoList.length);
  });

  describe('onRemove', () => {
    let fixture: ComponentFixture<TodoListComponent>;
    let firstTodoItem: TodoItem;
    let expectedLength: number;

    beforeEach(() => {
      // Arrange
      fixture = TestBed.createComponent(TodoListComponent);
      expectedLength = todoList.length - 1;
      firstTodoItem = todoList[0];
      fixture.detectChanges();
      let firstRemoveButton = fixture.debugElement.query(By.css('ol li button'));

      // Act
      firstRemoveButton.triggerEventHandler('click', null);
      fixture.detectChanges();
    });

    it('should call sevice to remove todo item', () => {
      expect(todoListServiceMock.removeItem).toHaveBeenCalledWith(firstTodoItem);
    });

    it('should remove todo item', () => {
      let items = fixture.debugElement.queryAll(By.css('ol li'));
      expect(items.length).toBe(expectedLength);
    });
  });

});
