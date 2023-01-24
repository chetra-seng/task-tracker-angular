import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  showAddTask = false;
  subject = new Subject<any>();

  constructor() { }

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle() {
    return this.subject.asObservable()
  }
}
