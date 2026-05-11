import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../const/todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() getTodos!: Array<Itodo>;
  @Output() emitRemoveId: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _matdialog: MatDialog) {}

  ngOnInit(): void {}

  onRemoveTodo(todoId: string) {
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    let matDialogRef = this._matdialog.open(GetConfirmComponent, config);
    matDialogRef.afterClosed().subscribe((getConfirmation) => {
      if (getConfirmation === true) {
        this.emitRemoveId.emit(todoId);
      }
    });
  }
}
