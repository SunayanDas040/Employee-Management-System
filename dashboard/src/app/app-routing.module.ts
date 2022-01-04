import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { ApplyLeaveComponent } from './modules/apply-leave/apply-leave.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LeaveComponent } from './modules/leave/leave.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { QuickLinkComponent } from './modules/quick-link/quick-link.component';
import { TaskComponent } from './modules/task/task.component';
// import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'task',
      component: TaskComponent
    },
    {
      path: 'leave',
      component: LeaveComponent
    },
    {
      path: 'apply-leave',
      component: ApplyLeaveComponent
    },
    {
      path: "profile",
      component: ProfileComponent,
      children:[
        {path:'leave',component:LeaveComponent}
      ]
    }
  ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"abc",
    component:QuickLinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
