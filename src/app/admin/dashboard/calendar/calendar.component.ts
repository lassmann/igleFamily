import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarList: Observable<any[]>;
  calendarForm: FormGroup;
  path: string;
  create = false;

  constructor(db: AngularFireDatabase,
              private fb: FormBuilder) {
    this.calendarList = db.list('events').valueChanges();
    this.path = 'calendarV2';
  }

  ngOnInit() {
  }

  buildForm() {
    this.create = true;
    this.calendarForm = this.fb.group({
      'title': [''],
      'image': [''],
      'address': [''],
      'description': [''],
      'startDate': [''],
      'endDate': ['']
    });
  }

  createEvent() {

  }

  editEvent(id: string) {

  }

  deleteEvent(id: string) {

  }
}
