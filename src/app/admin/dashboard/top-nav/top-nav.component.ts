import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: [ './top-nav.component.css' ]
})
export class TopNavComponent implements OnInit {
  userData: User;

  constructor(private auth: AuthService) {
    this.userData = this.auth.userData;
  }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }

}
