import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class Taskservice {

   private apiUrl = 'https://jsonplaceholder.typicode.com/https://jsonplaceholder.typicode.com/todos?_limit=5';

  constructor(private http: HttpClient) { }

  // Get all todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  // Get a specific todo by ID
  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }


  private tasks = [
    {id : 1, title: 'Learn Angular', done: false },
    {id : 2, title: 'Build ToDoList App', done: false },
    {id : 3,title: 'Celebrate!', done: true }
];
getTasks() {
  return this.tasks;
}
addTask(title: string) {
  this.tasks.push({id: Date.now(), title, done: false });
}
removeTask(ind:number){
this.tasks.splice(ind,1)
}

}
