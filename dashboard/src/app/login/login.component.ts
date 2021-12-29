import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isAdmin: boolean = true;
  employeeId!: number
  employeePassword!: string
  adminId!: number
  adminPassword!: string

  empDetails = {
    id: 6,
    pass: "123"
  }

  adminDetails = {
    id: 1,
    pass: "123"
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickEmployee() {
    if (this.isAdmin) {
      this.isAdmin = !this.isAdmin;
    }
  }

  onClickAdmin() {
    if (!this.isAdmin) {
      this.isAdmin = !this.isAdmin;
    }
  }

  employeeLogin() {

    if(this.employeeId === this.empDetails.id && this.employeePassword === this.empDetails.pass) {
      this.router.navigateByUrl('')
    }

  }

  adminLogin() {
    if(this.adminId === this.adminDetails.id && this.adminPassword === this.adminDetails.pass) {
      this.router.navigateByUrl('')
    }
  }

}
