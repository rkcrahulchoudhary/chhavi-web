import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todoList/todo/todo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateTodoComponent } from './todoList/create-todo/create-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTodoComponent } from './todoList/edit-todo/edit-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    EditTodoComponent,
    
  ],
  imports: [
    //CommonModule,
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
