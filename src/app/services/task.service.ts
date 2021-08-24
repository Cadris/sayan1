import { Injectable } from '@angular/core';
import { Task } from 'src/data/Task';
import { TASKS } from 'src/data/mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Observable<Task[]>{
    const tasks = of(TASKS)
    return tasks;
  }
}
