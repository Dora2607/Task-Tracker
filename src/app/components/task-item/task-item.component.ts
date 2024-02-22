import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit{
  
  @Input()
  task!: Task;
  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output()
  onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;

  constructor(){}
  
  ngOnInit(): void {
    
  }
  onDelete(task: Task | undefined){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task | undefined){
    this.onToggleReminder.emit(task)
  } 
}