import { Injectable } from '@angular/core';
import { TASKS } from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  getTasks() {
    return TASKS;
  }
}
