import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskList: string[] = ["Add Navbar", "MongoDB collection creation", "Cors error", "Use Cookies", "Session Management"]

  constructor() { }

  ngOnInit(): void {
  }

}
