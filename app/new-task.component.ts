import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <input placeholder="Priority Level" class="col-sm-8 input-lg" #newPriorityLevel>
    <button (click)="addTask(newDescription, newPriorityLevel)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<Object>;

  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriorityLevel: HTMLInputElement){
    this.onSubmitNewTask.emit({description: userDescription.value, priority: userPriorityLevel.value});
    userDescription.value = "";
    userPriorityLevel.value = "";
  }
}
