import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
  
  i : number=0;
  tasks = [
  { id:1,title: 'Learn Angular', done: false },
  { id:2, title: 'Build ToDoList App', done: false },
  { id:3, title: 'Celebrate!', done: true }
  ];


  addNewTask(){
     this.i = this.tasks.length;
     this.i ++;
    this.tasks.push( { id:this.i, title: 'new Task!', done: false })
  }
  
  removeTask(id:number){
    this.tasks.splice(id,1);

  }
}
