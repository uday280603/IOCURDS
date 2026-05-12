import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../module/Istudent';
import { SnackBarService } from '../../services/snackBar.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit {


  editStudentObj!: Istudent;

  studentArr: Istudent[] = [
    {
      id: 1,
      name: 'Aarav',
      lastname: 'Sharma',
      email: 'aarav.sharma@example.com',
      contact: '9876543210',
      isActive: true,
    },
    {
      id: 2,
      name: 'Priya',
      lastname: 'Patel',
      email: 'priya.patel@example.com',
      contact: '9123456780',
      isActive: false,
    },
    {
      id: 3,
      name: 'Rahul',
      lastname: 'Verma',
      email: 'rahul.verma@example.com',
      contact: '9988776655',
      isActive: true,
    },
  ];

  constructor(private _snackBar : SnackBarService) {}

  ngOnInit(): void {}

  getNewStudent(newStudent: Istudent) {
    this.studentArr.unshift(newStudent);
     this._snackBar.openSnackBar(`Student ${newStudent.name} is Added Successfully....!`)
  }
  getRemoveId(studentId: number) {
    let getIndex = this.studentArr.findIndex((s) => s.id === studentId);
    this.studentArr.splice(getIndex, 1);
    this._snackBar.openSnackBar(`Student removed Successfully....!`)
  }

  getEditStudentObj(editObj: Istudent) {
    this.editStudentObj = editObj;
  }

  getUpdatedObj(updatedObj : Istudent){
    let getIndex = this.studentArr.findIndex(s => s.id ===  updatedObj.id);
    this.studentArr[getIndex] = updatedObj;
    this._snackBar.openSnackBar(`Student ${updatedObj.name} is Updated Successfully....!`)

  }
}
