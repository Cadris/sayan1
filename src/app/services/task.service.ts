import { Injectable } from '@angular/core';
import { Task } from 'src/data/Task';
import { TASKS } from 'src/data/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Task[]{
    return TASKS;
  }
}
