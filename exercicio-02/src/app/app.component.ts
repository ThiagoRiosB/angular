import { Component } from '@angular/core';
import { IUser } from './interface/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  usersSelected: IUser = UsersList[1];
}
