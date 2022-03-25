import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TodoService } from 'src/app/services/todo-services/todo.service';
import { CreateTodoComponent } from '../create-todo/create-todo.component';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  displayedColumns = ['model','make','year', 'action', 'action1'];
  dataSource;
  constructor(
    public dialog: MatDialog,
    private changeDetectedRef: ChangeDetectorRef,private _todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.showTable();
  }

  addTodo(){
    console.log("Hello Rahul");
    const dialogRef = this.dialog.open(CreateTodoComponent, {
     
    });
    this.changeDetectedRef.detectChanges();
  }

  showTable() {
    this._todoService.getTodoDetail().subscribe(res => {
      if (res < 0 || res == "") {
      } else {
        this.dataSource = res.data;
        console.log("this.dataSource: :",this.dataSource);
        this.changeDetectedRef.detectChanges();
      }
    })
    this.changeDetectedRef.detectChanges();
  }

}
