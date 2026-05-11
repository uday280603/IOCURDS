import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
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
export class TodoFormComponent implements OnInit, OnChanges {
  @Input() getTodoObj!: Itodo;

  @Input() getEditObj!: Itodo;

  isInEditMode: boolean = false;
  @ViewChild('todoItem') todoItem!: ElementRef;
  @ViewChild('isCompleted') isCompleted!: ElementRef;
  @Output() emitNewTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() emitUpdatedTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();

  constructor(
    private _uuidServive: UuidService,
    private _snackBar: SnackBarService,
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);

    if (!!changes['getEditObj'].currentValue) {
      this.isInEditMode = true;
      this.todoItem.nativeElement.value = this.getEditObj.todoItem;
      this.isCompleted.nativeElement.value = this.getEditObj.isCompleted;
    }
  }

  ngOnInit(): void {
    // console.log(this.getTodoObj);
  }
  onTodoAdd() {
    let newTodoObj: Itodo = {
      todoId: this._uuidServive.generateUUID(),
      todoItem: this.todoItem.nativeElement.value,
      isCompleted:
        this.isCompleted.nativeElement.value === 'true' ? true : false,
    };
    console.log(newTodoObj);
    this.todoItem.nativeElement.value = '';
    this.isCompleted.nativeElement.value = true;
    this.emitNewTodo.emit(newTodoObj);
    this._snackBar.openSnackBar(
      `New todo Item ${newTodoObj.todoItem} is Added Successfully...!!!`,
    );
  }

  onTodoUpdate() {
    let UPDATED_OBJ: Itodo = {
      todoItem: this.todoItem.nativeElement.value,
      todoId: this.getEditObj.todoId,
      isCompleted: this.isCompleted.nativeElement.value,
    };

    this.emitUpdatedTodo.emit(UPDATED_OBJ);
    this.todoItem.nativeElement.value = '';
    this.isCompleted.nativeElement.value = true;
    this.isInEditMode = false;
    this._snackBar.openSnackBar(
      `Todo Item ${UPDATED_OBJ.todoItem} is Updated Successfully...!!!`,
    );
  }
}
