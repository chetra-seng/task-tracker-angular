import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks"

  constructor(private httpClient: HttpClient) { }

  getTasks() {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task) {
    return this.httpClient.delete(`${this.apiUrl}/${task.id}`);
  }
}
