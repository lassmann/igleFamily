import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

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
    AngularFireDatabaseModule,
    AppRoutingModule,
    MaterialModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
