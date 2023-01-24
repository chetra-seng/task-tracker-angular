import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  handleOnDelete(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  handleOnToggle(task: Task) {
    this.taskService
      .updateTaskReminder({ ...task, reminder: !task.reminder })
      .subscribe((data) => (task.reminder = data.reminder));
  }

  handleSubmit(task: Task) {
    this.taskService.addTask(task).subscribe((data) => this.tasks.push(data));
  }
}
