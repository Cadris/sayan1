import { Component, OnInit } from '@angular/core';
import { Task } from 'src/data/Task';
import { TASKS } from 'src/data/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS; //Takes all the TASKS and makes a local copy 

  constructor() { }

  ngOnInit(): void {
  }

}
