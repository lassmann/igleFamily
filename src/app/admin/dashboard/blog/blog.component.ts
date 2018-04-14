import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FirebaseServiceService } from '../../../services/firebase-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogList: Observable<any[]>;
  blogForm: FormGroup;
  path: string;
  create = false;

  constructor(private fbService: FirebaseServiceService,
              private fb: FormBuilder) {
    this.path = 'blogV2';
    this.blogList = this.fbService.getList(this.path);
  }

  ngOnInit() {
  }

  buildForm() {
    this.create = true;
    this.blogForm = this.fb.group({
      'title': [''],
      'description': [''],
    });
  }

  createBlogItem() {

  }

  deleteBlogItem(id: string) {
    return this.fbService.deleteItemList(this.path, id);
  }

  editBlogItem(key, data) {
    return this.fbService.updateItemList(this.path, key, data);
  }

}
