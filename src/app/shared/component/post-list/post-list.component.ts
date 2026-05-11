import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from '../../const/post';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  
  @Input() getPostObj!: Ipost[];

  @Output() emitRemoveId: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitEditObj: EventEmitter<Ipost> = new EventEmitter<Ipost>();

  constructor(private _matdialog: MatDialog) {}

  ngOnInit(): void {}
  onRemovePost(postId: string) {
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;

    let matDialogRef = this._matdialog.open(GetConfirmComponent, config);
    matDialogRef.afterClosed().subscribe((getConfirmation) => {
      if (getConfirmation === true) {
        this.emitRemoveId.emit(postId);
      }
    });
  }
  onEditPost(postObj: Ipost) {
    this.emitEditObj.emit(postObj)
  }
  trackByFun(index: number, item: Ipost) {
    return item.postId;
  }
}
