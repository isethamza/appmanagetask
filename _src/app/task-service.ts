import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

private tasks = [
  { title: 'Learn Angular', done: false },
{ title: 'Build ToDoList App', done: false },
{ title: 'Celebrate service!', done: true }
];
getTasks() {
return this.tasks;
}
addTask(title: string) {
this.tasks.push({ title, done: false });
}

removeTask(ind:number){
this.tasks.splice(ind,1)
}


}
