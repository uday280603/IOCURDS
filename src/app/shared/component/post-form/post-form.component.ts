import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ipost } from '../../const/post';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @ViewChild('postTitle') postTitle!: ElementRef;
  @ViewChild('postBody') postBody!:ElementRef;

 @Output() emitNewPost:EventEmitter<Ipost> = new EventEmitter<Ipost>()

  constructor(private _uuid : UuidService) { }

  ngOnInit(): void {
  }
  onPostAdd(){
    let newPostObj:Ipost ={
      postId:this._uuid.generateUUID(),
      postTitle:this.postTitle.nativeElement.value,
      content:this.postBody.nativeElement.value
    }
    // console.log(newPostObj);
    this.postTitle.nativeElement.value='';
    this.postBody.nativeElement.value='';
    this.emitNewPost.emit(newPostObj);
    
  }

}
