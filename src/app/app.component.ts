import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
  dummy_users = DUMMY_USERS;
  selectedUserName = '';
  selectedUserId = '';
  selected = false;

  onUserSelected(id: string) {
    this.selectedUserId = id;
    for(const user of DUMMY_USERS) {
      if(user.id === id) {
        this.selectedUserName = user.name;
      }
    }
  }
}
