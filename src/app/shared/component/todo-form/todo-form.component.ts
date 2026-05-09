import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Itodo } from '../../const/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoItem') todoItem!: ElementRef;
  @ViewChild('isCompleted') isCompleted!: ElementRef;

  @Output() emitNewTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();

  constructor(private _todoservice: TodoService) {}

  ngOnInit(): void {}
  onTodoAdd() {
    let newTodoObj: Itodo = {
      todoId: this._todoservice.generateUUID(),
      todoItem: this.todoItem.nativeElement.value,
      isCompleted:this.isCompleted.nativeElement.value === 'true' ? true : false,
    };
    console.log(newTodoObj);
    this.todoItem.nativeElement.value = '';
    this.isCompleted.nativeElement.value = true;
    this.emitNewTodo.emit(newTodoObj);
  }
}
