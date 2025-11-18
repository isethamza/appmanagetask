import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Taskservice {
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
