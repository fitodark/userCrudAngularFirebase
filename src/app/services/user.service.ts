import { Injectable } from '@angular/core';

import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { User } from '../models/user';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;
  userToEdit: User;
  editState: boolean;

  constructor(public afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users');
    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.editState = false;
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.usersCollection.add(user);
  }

  deleteUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.delete();
  }

  updateUser() {
    this.userDoc = this.afs.doc(`users/${this.userToEdit.id}`);
    this.userDoc.update(this.userToEdit);
  }

  setEditState(user: User) {
    this.editState = !this.editState;
    this.userToEdit = user;
  }

  getEditState() {
    return this.editState;
  }
}
