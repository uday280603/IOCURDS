import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../module/Iproduct';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() getAllProduct!:Iproduct[];
 

  @Output() emitRemoveid : EventEmitter<number> = new EventEmitter<number>()
  @Output() emitEditObj : EventEmitter<Iproduct> = new EventEmitter<Iproduct>()

  constructor(private _matDailog : MatDialog) { }

  ngOnInit(): void {
  }

  onRemove(removeId : number){

    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    let matRefrence = this._matDailog.open(GetConfirmComponent,config);
    matRefrence.afterClosed().subscribe(getconfirmation =>{
      if(getconfirmation===true){

        this.emitRemoveid.emit(removeId)
        

      }
    })

  }
  onEditProduct(editProductObj  : Iproduct){

    this.emitEditObj.emit(editProductObj)

  }
  trackByFun(index : number , item : Iproduct){
    return item.id;
  }

}
