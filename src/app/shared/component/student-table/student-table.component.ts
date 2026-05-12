import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from '../../module/Istudent';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {


  @Input() getStudetnts!:Istudent[];
  @Output() emitRemoveId : EventEmitter<number> = new EventEmitter<number>();
  @Output() emitEditStudentObj : EventEmitter<Istudent> = new EventEmitter<Istudent>();
  constructor(private _matDialog : MatDialog) { }

  ngOnInit(): void {
  }

  onRemoveStudent(studentId : number){

    let config = new MatDialogConfig();
    config.width = '400';
    config.disableClose = true;
    let matDialogRef = this._matDialog.open(GetConfirmComponent , config);
    matDialogRef.afterClosed().subscribe(getConfirmaton =>{
      if(getConfirmaton === true){

        this.emitRemoveId.emit(studentId);

      }
    })

  }

  onEditStudent(editStudentObj : Istudent){
    this.emitEditStudentObj.emit(editStudentObj);

  }

}
