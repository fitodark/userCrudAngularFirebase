import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(event, user) {
    const response = confirm('esta seguro de eliminar el usuario?');
    if (response ) {
      this.userService.deleteUser(user);
    }
    return;
  }

  editUser(event, user) {
    this.userService.setEditState(user);
  }

}
