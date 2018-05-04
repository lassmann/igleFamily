import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) {
  }

  public getList(path: string): Observable<any[]> {
    return this.db.list(path).snapshotChanges();
  }

  public deleteItemList(path: string, key: string): Promise<void> {

    return this.db.list(path).remove(key);
  }

  public updateItemList(path: string, key: string, object: Object): Promise<void> {
    return this.db.list(path).update(key, object);
  }

  public createItemList(path: string, data: Object) {
    return this.db.list(path).push(data);
  }
}
