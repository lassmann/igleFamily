import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogList: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.blogList = db.list('blog').valueChanges();
  }

  ngOnInit() {
  }

}
