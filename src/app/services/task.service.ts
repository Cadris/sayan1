import { Injectable } from '@angular/core';
import { Task } from 'src/data/Task';
//import { TASKS } from 'src/data/mock-tasks';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/Tasks';

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
}
