import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() onDelete = new EventEmitter<Task>();
  @Output() onToggle = new EventEmitter<Task>();

  faTimes = faTimes;

  onDeleteClick(task: Task | null) {
    if (task) {
      this.onDelete.emit(task);
    }
  }

  onToggleClick(task: Task | null) {
    if (task) {
      this.onToggle.emit(task);
    }
  }

  ngOnInit(): void {}
}
