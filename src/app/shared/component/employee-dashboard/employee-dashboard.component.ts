import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../../const/Iemployee';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from '../../services/snackBar.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  editEmployeeObj !: Iemployee;

  employeesArr : Iemployee[] = [
  {
    empId: 101,
    empName: "Amit Sharma",
    empAddress: "Mumbai, Maharashtra",
    empPhone: "9876543210",
    inService: true
  },
  {
    empId: 102,
    empName: "Priya Verma",
    empAddress: "Pune, Maharashtra",
    empPhone: "9123456780",
    inService: false
  },
  {
    empId: 103,
    empName: "Rahul Patil",
    empAddress: "Nagpur, Maharashtra",
    empPhone: "9988776655",
    inService: true
  }
];

  constructor(private _snackBar : SnackBarService) { }

  ngOnInit(): void {
  }

  getRemoveId(removeId : number){
    let getIndex = this.employeesArr.findIndex(e=> e.empId === removeId);
    this.employeesArr.splice(getIndex,1);
    this._snackBar.openSnackBar('Employee Removed Successfully..!');

  }
  getNewemployeeObj(newEmployee : Iemployee){
    this.employeesArr.unshift(newEmployee);
    this._snackBar.openSnackBar(`New Employee ${newEmployee.empName} is Added Successfully..!`)
  }
  getEditObj(editEmployee : Iemployee){
    this.editEmployeeObj = editEmployee

  }
  getUpdatedObj(updatedObj : Iemployee){
    let getIndex = this.employeesArr.findIndex(e => e.empId = updatedObj.empId);
    this.employeesArr[getIndex] = updatedObj;
    this._snackBar.openSnackBar(` Employee ${updatedObj.empName} is Updated Successfully..!`)

  }

  trackByFun(index : number , employee : Iemployee){
    return employee.empId;
  }

}
