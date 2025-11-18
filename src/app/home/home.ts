import { Component, signal } from '@angular/core';
import { Taskservice } from '../taskservice';
import { Task } from '../task/task';

@Component({
  selector: 'app-home',
  imports: [Task],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
protected readonly title = signal('📋todolist✌️');
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
