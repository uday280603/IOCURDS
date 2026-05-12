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
import { Ipost } from '../../const/post';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit, OnChanges {
  @Input() getEditObj!: Ipost;

  isInEditMode: boolean = false;

  @ViewChild('postTitle') postTitle!: ElementRef;
  @ViewChild('postBody') postBody!: ElementRef;

  @Output() emitNewPost: EventEmitter<Ipost> = new EventEmitter<Ipost>();
  @Output() emitUpdatedObj: EventEmitter<Ipost> = new EventEmitter<Ipost>();

  constructor(private _uuid: UuidService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['getEditObj'].currentValue) {
      this.isInEditMode = true;
      this.postTitle.nativeElement.value = this.getEditObj.postTitle;
      this.postBody.nativeElement.value = this.getEditObj.content;
    }
  }

  ngOnInit(): void {}
  onPostAdd() {
    let val1: string = this.postTitle.nativeElement.value;
    if (val1.length > 0) {
      let newPostObj: Ipost = {
        postId: this._uuid.generateUUID(),
        postTitle: this.postTitle.nativeElement.value,
        content: this.postBody.nativeElement.value,
      };
      // console.log(newPostObj);
      this.postTitle.nativeElement.value = '';
      this.postBody.nativeElement.value = '';
      this.emitNewPost.emit(newPostObj);
    }
  }

  onUpdatePost() {
    let UPDATED_OBJ: Ipost = {
      postId: this.getEditObj.postId,
      postTitle: this.postTitle.nativeElement.value,
      content: this.postBody.nativeElement.value,
    };
    this.emitUpdatedObj.emit(UPDATED_OBJ);
    this.postTitle.nativeElement.value = '';
    this.postBody.nativeElement.value = '';
    this.isInEditMode = false;
  }
}
