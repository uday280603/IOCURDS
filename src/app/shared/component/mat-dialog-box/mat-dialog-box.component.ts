import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog-box',
  templateUrl: './mat-dialog-box.component.html',
  styleUrls: ['./mat-dialog-box.component.scss']
})
export class MatDialogBoxComponent implements OnInit {

  constructor(private _matDialogRef : MatDialogRef<MatDialogBoxComponent>) { }

  ngOnInit(): void {
  }

  onClose(flag:boolean){
    this._matDialogRef.close(flag)
  }
}
