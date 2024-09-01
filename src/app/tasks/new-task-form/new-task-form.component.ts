import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from './new-task-form.model';

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
  @Output() newTask = new EventEmitter<NewTask>();

  closeForm() {
    this.closeTaskForm.emit();
  }

  onSubmit() {
    this.newTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    })
  }
}
