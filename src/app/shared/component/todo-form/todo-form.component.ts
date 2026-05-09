import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Itodo } from '../../const/todo';
import { UuidService } from '../../services/uuid.service';
import { SnackBarService } from '../../services/snackBar.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoItem') todoItem!: ElementRef;
  @ViewChild('isCompleted') isCompleted!: ElementRef;
  @Output() emitNewTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();

  constructor(private _uuidServive: UuidService , private _snackBar : SnackBarService) {}

  ngOnInit(): void {}
  onTodoAdd() {
    let newTodoObj: Itodo = {
      todoId: this._uuidServive.generateUUID(),
      todoItem: this.todoItem.nativeElement.value,
      isCompleted:this.isCompleted.nativeElement.value === 'true' ? true : false,
    };
    console.log(newTodoObj);
    this.todoItem.nativeElement.value = '';
    this.isCompleted.nativeElement.value = true;
    this.emitNewTodo.emit(newTodoObj);
    this._snackBar.openSnackBar(`New todo Item ${newTodoObj.todoItem} is Added Successfully...!!!`);
  
  }
}
