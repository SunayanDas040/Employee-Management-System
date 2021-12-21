import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
// import { MatCardModule } from '@angular/material/card';
// import { PostsComponent } from './modules/posts/posts.component';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { FooterComponent } from './shared/components/footer/footer.component';
// import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
// import { DefaultComponent } from './layouts/default/default.component';
// import { DashboardComponent } from './modules/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    // PostsComponent,
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent,
    // DefaultComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    // MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
