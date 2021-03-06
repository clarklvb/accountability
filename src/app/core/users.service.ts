import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersCollection: AngularFirestoreCollection;
  userDocument: AngularFirestoreDocument

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users', (ref) => ref.orderBy('displayName', 'desc'));
  }

  getData(): Observable<any[]> {
    return this.usersCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

  getUser(id: string) {
    return this.afs.collection("users").doc(id).ref.get()
      .then(function(doc) {
          if (doc.exists) {
            return doc.data();
          } else {
            console.log("No such document!");
          }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
  }

  updateUser(id: string, data: any) {
    return this.afs.doc<any>(`users/${id}`).update(data);
  }
}
