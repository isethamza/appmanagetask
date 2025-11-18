import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true, // ✅ obligatoire pour standalone components
  imports: [],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task {
  @Input() taskTitle = 'Learn Angular';
  @Input() isDone = false;
  @Output() doneChange = new EventEmitter<boolean>();
  @Output() deleted = new EventEmitter<void>(); // ✅ pour le bouton supprimer

  markAsDone() {
    this.isDone = !this.isDone; // ✅ toggle l’état localement
    this.doneChange.emit(this.isDone); // ✅ informer le parent du nouvel état
//this.isDone = ! this.isDone ;
}
  deleteTask() {
    this.deleted.emit();
  }
}
