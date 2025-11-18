import { Component,  EventEmitter,  Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {

 @Input() taskTitle = 'Learn Angular';
 @Input() isDone = false;
 @Output() remove = new EventEmitter<void>();
markAsDone() {
this.isDone = !this.isDone;
}

deleteTask(){

  this.remove.emit()

}


}
