import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
