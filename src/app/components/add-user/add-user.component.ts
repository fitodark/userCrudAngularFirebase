import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    age: null
  };
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if ( this.user.name !== '' && this.user.email !== '') {
      this.userService.addUser(this.user);
      this.user.name = '';
      this.user.email = '';
      this.user.age = null;
    }
  }

  editUser(event, task) {
    this.userService.setEditState(task);
  }

  updateUser() {
    this.userService.updateUser();
    this.userService.setEditState(null);
  }

  getEditState() {
    return this.userService.getEditState();
  }

}
