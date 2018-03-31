import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './admin/login/login.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {BlogComponent} from './admin/dashboard/blog/blog.component';
import {FriendsComponent} from './admin/dashboard/friends/friends.component';
import {CalendarComponent} from './admin/dashboard/calendar/calendar.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: 'blog',
          component: BlogComponent
        }, {
          path: 'friends',
          component: FriendsComponent
        }, {
          path: 'calendar',
          component: CalendarComponent
        }
      ]
    }],
  },
  {
    path: '**',
    redirectTo: 'admin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
