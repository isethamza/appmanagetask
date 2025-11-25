import { Component, signal } from '@angular/core';
import { Taskservice } from '../taskservice';
import { Task } from '../task/task';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [Task,ReactiveFormsModule,HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
protected readonly title = signal('📋todolist✌️');
  tasks: any[] = [];
  loading = false;
  error = '';

   taskForm = new FormGroup({
   title: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
     
  constructor(private Taskservice: Taskservice,private fb: FormBuilder) {
   
  }
  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.loading = true;
    this.Taskservice.getTodos().subscribe({
      next: (data) => {
        this.tasks = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load todos';
        this.loading = false;
        console.error('Error fetching todos:', error);
      }
    });
  }


   onSubmit() {
    if (this.taskForm.valid) {
      this.tasks.push({ title: this.taskForm.value.title, done: false });
      this.taskForm.reset();
      }
   }
  addNewTask(){
  
      this.Taskservice.addTask("new task service")
  
    }
  
    removeTask(id:number){
    this.Taskservice.removeTask(id)
    }

}
