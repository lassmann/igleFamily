import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  path: string;
  list: Observable<any[]>;

  constructor(private fbService: FirebaseServiceService) {
    // this.list = fbService.getList(this.path);
  }

  ngOnInit() {
  }

  public removeItem(key: string) {
    return this.fbService.deleteItemList(this.path, key);
  }

  public updateItem(key: string, value: Object) {
    return this.fbService.updateItemList(this.path, key, { 'apellido': 'updated' });
  }

  public createItem() {
    return this.fbService.createItemList(this.path, { 'name': 'test', 'apellido': 'test' })
  }


}
