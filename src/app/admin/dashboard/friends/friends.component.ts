import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friendsList: Observable<any[]>;
  path: string;

  constructor(db: AngularFireDatabase) {
    this.friendsList = db.list('friendsLocations').valueChanges();
    this.path = 'friendsV2';

  }

  ngOnInit() {
  }

}
