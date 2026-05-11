import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iemployee } from '../../const/Iemployee';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

   @Input() getEmployee !: Iemployee;

   @Output() emitRemoveId : EventEmitter<number> = new EventEmitter<number>()
   @Output() emitEditObj : EventEmitter<Iemployee> = new EventEmitter<Iemployee>()
   

  constructor(private _matDialog : MatDialog) { }

  ngOnInit(): void {
  }

  onRemove(empId : number){

    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    let matDialogRef = this._matDialog.open(GetConfirmComponent,config);
    matDialogRef.afterClosed().subscribe((getconfirmation) =>{
      if(getconfirmation === true){

        this.emitRemoveId.emit(empId)

      }
    })

    

  }

  onEdit(editEmployeeObj : Iemployee){
    

  this.emitEditObj.emit(editEmployeeObj);



  }

}
