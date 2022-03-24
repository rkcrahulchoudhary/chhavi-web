import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http : HttpClient
  ) { }

  url = "http://localhost:5000/api/";
  creatTodo(todoCreation: Object): Observable<any> {
    const url = `${this.url}post`;
   return this.http.post(url,todoCreation)
    
  }

  getTodoDetail(): Observable<any>{
    const url = `${this.url}get`;
    return this.http.get(url);
  }

}
