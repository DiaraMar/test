import { Component, OnInit } from '@angular/core';
import { MockTask } from '../mock-task';

import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  selectedTask?: Task;
  

  constructor() { }

  ngOnInit(): void {
    MockTask.forEach(element => {
      let task: Task = {
        labelTask: element.labelTask,
        categoryTask: element.categoryTask
      }
      this.tasks.push(task)
    });
  }
  onSelect(task: Task): void {
    this.selectedTask = task;
  }


}
