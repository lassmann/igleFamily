import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './admin/login/login.component';
import {MaterialModule} from './material/material.module';
import { HomeComponent } from './home/home.component';

// Core
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CalendarComponent } from './admin/dashboard/calendar/calendar.component';
import { BlogComponent } from './admin/dashboard/blog/blog.component';
import { FriendsComponent } from './admin/dashboard/friends/friends.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    CalendarComponent,
    BlogComponent,
    FriendsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
