import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Task } from "./task/task";
import { Taskservice } from './taskservice';

// interface TaskModel {
//   id: number;
//   title: string;
//   done: boolean;
// }
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('📋todolist✌️');

// today = new Date();

// price = 1234.56;
// percentage = 0.259;

tasks: any[] = [];

constructor(private Taskservice: Taskservice) {}
ngOnInit() {
this.tasks = this.Taskservice.getTasks();
}
addNewTask(){

    this.Taskservice.addTask("new task service")

  }

  removeTask(id:number){
  this.Taskservice.removeTask(id)
  }
}
//   // Add new task
//   addTask(title: string) {
//     if (!title.trim()) return;
//     this.tasks.push({
//       id: Date.now(),
//       title,
//       done: false
//     });
//   }

//   // Delete task
//   deleteTask(id: number) {
//     this.tasks = this.tasks.filter(t => t.id !== id);
//   }
// }
