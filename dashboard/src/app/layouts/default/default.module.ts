import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
// import { HeaderComponent } from 'src/app/shared/components/header/header.component';
// import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
// import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { LeaveComponent } from 'src/app/modules/leave/leave.component';
import { TaskComponent } from 'src/app/modules/task/task.component';
import { MatButtonModule } from '@angular/material/button';
import { ApplyLeaveComponent } from 'src/app/modules/apply-leave/apply-leave.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { QuickLinkComponent } from 'src/app/modules/quick-link/quick-link.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    DefaultComponent,
    TaskComponent,
    LeaveComponent,
    ApplyLeaveComponent,
    ProfileComponent,
    DashboardComponent,
    QuickLinkComponent 
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatStepperModule

  ],
  providers: [
    // DashboardService
  ]
})
export class DefaultModule { }
