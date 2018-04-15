import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friendsList: Observable<any[]>;
  friendForm: FormGroup;
  path: string;
  create = false;
  days = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
  hours = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  minutes = ['00', '15', '30', '45'];

  constructor(db: AngularFireDatabase,
              private fb: FormBuilder) {
    this.friendsList = db.list('friendsLocations').valueChanges();
    this.path = 'friendsLocationsV2';
  }

  ngOnInit() {
  }

  buildForm() {
    this.create = true;
    this.friendForm = this.fb.group({
      'lider': [''],
      'anfitrion': [''],
      'lat': [''],
      'lng': [''],
      'dia': [''],
      'horario': ['']
    });
  }

  createFriendLocation() {

  }

  deleteFriendLocation() {

  }

  editFriendLocation() {

  }

}
