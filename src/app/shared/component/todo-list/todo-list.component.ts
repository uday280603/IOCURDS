import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../const/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() getTodos !:Array<Itodo>;
  @Output() emitRemoveId : EventEmitter <string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveTodo(todoId:string){
   this.emitRemoveId.emit(todoId);

  }

}
