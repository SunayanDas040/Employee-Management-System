import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
// import { ProfileComponent } from './modules/profile/profile.component';
// import { ApplyLeaveComponent } from './modules/apply-leave/apply-leave.component';
// import { TaskComponent } from './modules/task/task.component';
// import { LeaveComponent } from './modules/leave/leave.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // ProfileComponent,
    // ApplyLeaveComponent,
    // TaskComponent,
    // LeaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
