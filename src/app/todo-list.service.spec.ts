/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoListService } from './todo-list.service';
import { TodoItem } from './todo-item';

describe('Service: TodoList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListService]
    });
  });

  it('should ...', inject([TodoListService], (service: TodoListService) => {
    expect(service).toBeTruthy();
  }));

  it('should remember todo list', inject([TodoListService], (service: TodoListService) => {
    // Arrange
    let newTodoItem = new TodoItem();
    let list = service.getTodoList();
    list.push(newTodoItem);

    // Act
    const modifiedList = service.getTodoList();

    // Assert
    expect(modifiedList).toContain(newTodoItem);
  }));

  it('should be able to remove items', inject([TodoListService], (service: TodoListService) => {
    // Arrange
    let newTodoItem = new TodoItem();
    let list = service.getTodoList();
    list.push(newTodoItem);

    // Act
    service.removeItem(newTodoItem);

    // Assert
    const modifiedList = service.getTodoList();
    expect(modifiedList).not.toContain(newTodoItem);
  }));

});
