import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.css'
})
export class NewTaskFormComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  @Output() closeTaskForm = new EventEmitter<void>();

  closeForm() {
    this.closeTaskForm.emit();
  }
}
