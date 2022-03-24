import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoService } from 'src/app/services/todo-services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  todoForm = new FormGroup({
  });
  
  submitted = false;

  constructor( private fb: FormBuilder,public dialogRef: MatDialogRef<CreateTodoComponent>,
    private _todoService: TodoService
    ) {
    this.todoForm = this.fb.group({
      year: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.submitted = true;
    console.log("this.todoForm: ");
    // stop here if form is invalid
    if (this.todoForm.invalid) {
        return;
    }
  }

  get f() { return this.todoForm.controls; }


  onSubmit(){
    console.log("this.todoForm: ",this.todoForm.value);
    this._todoService.creatTodo(this.todoForm.value).subscribe(res =>{

    })
  }
  
      onReset() {
        this.submitted = false;
        this.dialogRef.close();
        this.todoForm.reset();
    }
}
