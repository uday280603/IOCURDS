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
import { Istudent } from '../../module/Istudent';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit, OnChanges {
  @Input() getEditObj!: Istudent;
  isInEditMode: boolean = false;
  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('isActive') isActive!: ElementRef;

  @Output() emitNewStudentObj: EventEmitter<Istudent> =
    new EventEmitter<Istudent>();

  @Output() emitUpdatedObj: EventEmitter<Istudent> =
    new EventEmitter<Istudent>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['getEditObj'].currentValue) {
      this.isInEditMode = true;
      ((this.fname.nativeElement.value = this.getEditObj.name),
        (this.lname.nativeElement.value = this.getEditObj.lastname),
        (this.email.nativeElement.value = this.getEditObj.email),
        (this.contact.nativeElement.value = this.getEditObj.contact),
        (this.isActive.nativeElement.value = this.getEditObj.isActive));
    }
  }

  ngOnInit(): void {}

  onStudentAdd() {
    let NEW_STUDENT_OBJ: Istudent = {
      id: Date.now(),
      name: this.fname.nativeElement.value,
      lastname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      isActive: this.isActive.nativeElement.value === 'true' ? true : false,
    };

    // console.log(NEW_STUDENT_OBJ);
    this.fname.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.contact.nativeElement.value = '';
    this.isActive.nativeElement.value = true;
    this.emitNewStudentObj.emit(NEW_STUDENT_OBJ);
  }

  onStudentUpdate() {
    let UPDATED_OBJ: Istudent = {
      name: this.fname.nativeElement.value,
      lastname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      isActive: this.isActive.nativeElement.value,
      id: this.getEditObj.id,
    };
    this.emitUpdatedObj.emit(UPDATED_OBJ);
    this.fname.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.contact.nativeElement.value = '';
    this.isActive.nativeElement.value = true;
    this.isInEditMode = false;
  }
}
