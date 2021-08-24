import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/data/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;

  faTimes = faTimes;   //font-awsome icon value

  constructor() { }

  ngOnInit(): void {
  }

}
