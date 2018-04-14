import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarList: Observable<any[]>;
  path: string;

  constructor(db: AngularFireDatabase) {
    this.calendarList = db.list('events').valueChanges();
    this.path = 'calendarV2';
  }

  ngOnInit() {
  }

}
