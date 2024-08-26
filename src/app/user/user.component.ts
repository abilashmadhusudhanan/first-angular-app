import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true}) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() selectedId = new EventEmitter();

  get avatarPath() {
    return `assets/users/${this.user.avatar}`
  }

  onUserSelect() {
    this.selectedId.emit(this.user.id);
  }
}
