import { Component, OnInit } from '@angular/core';
import { Task } from 'src/data/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []; //Takes all the TASKS and makes a local copy 

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //this.tasks = this.taskService.getTask();
    this.taskService.getTask().subscribe((tasks) =>{
      this.tasks = tasks;
    });
  }

}
