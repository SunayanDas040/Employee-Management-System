import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {

  toppings = new FormControl();

  toppingList: string[] = ["Casual Leave", "Earned Leave", "Work From Home", "Paternity Leave", "Loss Of Pay"]

  constructor() { }

  ngOnInit(): void {
  }

}
