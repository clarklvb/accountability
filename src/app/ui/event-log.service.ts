import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventLogService {

  eventLogCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.eventLogCollection = this.afs.collection('eventlog', (ref) => ref.orderBy('createdAt', 'desc'));
  }

  addEventLog(log) {
    let newLog = { user: this.authService.userName, description: log, createdAt: new Date() }
    this.eventLogCollection.add(newLog);
  }

  getEventLogs() {
    return this.eventLogCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }
}
