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
import { Iemployee } from '../../const/Iemployee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  @Input() getEditObj!: Iemployee;

  @ViewChild('empName') empName!: ElementRef;
  @ViewChild('empAddress') empAddress!: ElementRef;
  @ViewChild('empContact') empContact!: ElementRef;
  @ViewChild('isInService') isInService!: ElementRef;

  isInEditMode: boolean = false;

  @Output() emitNewEmployeeObj: EventEmitter<Iemployee> =
    new EventEmitter<Iemployee>();
  @Output() emitUpdatedObj: EventEmitter<Iemployee> =
    new EventEmitter<Iemployee>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['getEditObj'].currentValue) {
      this.isInEditMode = true;
      this.empName.nativeElement.value = this.getEditObj.empName;
      this.empAddress.nativeElement.value = this.getEditObj.empAddress;
      this.empContact.nativeElement.value = this.getEditObj.empPhone;
      this.isInService.nativeElement.value = this.getEditObj.inService;
    }
  }

  ngOnInit(): void {}

  onEmployeeAdd() {
    let val1: string = this.empName.nativeElement.value;
    if (val1.length > 0) {
      let NEW_EMPLOYEE_OBJ: Iemployee = {
        empId: Date.now(),
        empName: this.empName.nativeElement.value,
        empAddress: this.empAddress.nativeElement.value,
        empPhone: this.empContact.nativeElement.value,
        inService:
          this.isInService.nativeElement.value === 'true' ? true : false,
      };
      console.log(NEW_EMPLOYEE_OBJ);
      this.emitNewEmployeeObj.emit(NEW_EMPLOYEE_OBJ);
    }
  }

  onEmployeeUpdate() {
    let UPDATED_OBJ = {
      empId: this.getEditObj.empId,
      empName: this.empName.nativeElement.value,
      empAddress: this.empAddress.nativeElement.value,
      empPhone: this.empContact.nativeElement.value,
      inService: this.isInService.nativeElement.value === 'true' ? true : false,
    };

    // console.log(UPDATED_OBJ);
    this.emitUpdatedObj.emit(UPDATED_OBJ);
    this.empName.nativeElement.value = '';
    this.empAddress.nativeElement.value = '';
    this.empContact.nativeElement.value = '';
    this.isInService.nativeElement.value = true;
  }
}
