import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<Task>();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text.length) {
      alert("Task can't be empty");
      return;
    }

    if (!this.day.length) {
      alert("Day can't be empty");
      return;
    }
    const task = { text: this.text, day: this.day, reminder: this.reminder };
    this.formSubmit.emit(task);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
