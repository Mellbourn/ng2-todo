import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListService } from './todo-list.service';
import { TodoItemEditorComponent } from './todo-item-editor/todo-item-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
