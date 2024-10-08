import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskFormComponent } from "./new-task-form/new-task-form.component";
import { type NewTask } from './new-task-form/new-task-form.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true}) userId!: string;
  @Input({ required: true }) name!: string;
  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]
  isNewTask = false;

  get selectedUserTasks() {
    return this.dummyTasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(completedTaskId: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== completedTaskId)
  }

  onAddTask() {
    this.isNewTask = !this.isNewTask;
  }

  onCloseTaskForm() {
    this.isNewTask = false;
  }

  onNewTask(newTask: NewTask) {
    this.dummyTasks.push({
      id: Date.now().toString(),
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate
    });
    this.isNewTask = false;
  }
}
