import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseServiceService } from '../../../services/firebase-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [ './blog.component.css' ]
})
export class BlogComponent implements OnInit {
  blogList: Observable<any[]>;
  path: string;

  constructor(private fbService: FirebaseServiceService) {
    this.path = 'lucas';
    this.blogList = this.fbService.getList(this.path);
  }

  ngOnInit() {
  }

  deleteBlogItem(id: string) {
    return this.fbService.deleteItemList(this.path, id);
  }

  updateBlogItem(key, data) {
    return this.fbService.updateItemList(this.path, key, data);
  }

}
