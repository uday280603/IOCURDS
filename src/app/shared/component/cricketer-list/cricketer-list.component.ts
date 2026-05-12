import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icricketers } from '../../module/Icricketers';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogBoxComponent } from '../mat-dialog-box/mat-dialog-box.component';

@Component({
  selector: 'app-cricketer-list',
  templateUrl: './cricketer-list.component.html',
  styleUrls: ['./cricketer-list.component.scss'],
})
export class CricketerListComponent implements OnInit {
  @Input() getAllcricketers!: Icricketers;

  editObj !: Icricketers;
  @Output() emitRemoveId: EventEmitter<number> = new EventEmitter<number>();
  @Output() emitEditObj : EventEmitter<Icricketers> = new EventEmitter<Icricketers>();

  constructor(private _matDialog: MatDialog) {}

  ngOnInit(): void {}

  onRemove(cricId: number) {
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    let matDialogRef = this._matDialog.open(MatDialogBoxComponent, config);
    matDialogRef.afterClosed().subscribe((getConfirm) => {
      if (getConfirm === true) {
        this.emitRemoveId.emit(cricId);
      }
    });
  }
  onEdit(getEditObj : Icricketers){
    
    this.editObj = getEditObj
    this.emitEditObj.emit(getEditObj)

  }
}
