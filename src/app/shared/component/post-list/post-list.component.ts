import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from '../../const/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

   @Input() getPostObj !:Ipost[];

   @Output() emitRemoveId : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onRemovePost(postId:string){
    this.emitRemoveId.emit(postId);
    

  }
  trackByFun(index : number , item :Ipost){
    return item.postId;

  }

}
