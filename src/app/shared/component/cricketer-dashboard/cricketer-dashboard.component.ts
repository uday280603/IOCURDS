import { Component, OnInit } from '@angular/core';
import { Icricketers } from '../../module/Icricketers';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from '../../services/snackBar.service';

@Component({
  selector: 'app-cricketer-dashboard',
  templateUrl: './cricketer-dashboard.component.html',
  styleUrls: ['./cricketer-dashboard.component.scss']
})
export class CricketerDashboardComponent implements OnInit {


  editObjForPatch !: Icricketers;

  cricketerArr :Icricketers[] = [
  {
    id: 1,
    jersy:45,
    name: "Rohit Sharma",
    image: "https://th.bing.com/th/id/OIP.1475JHHRNNemW7FoXJz-7wHaEK?w=300&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    runs: 10709,
    wickets: 8,
    isPlaying: true
  },
  {
     id: 2,
    jersy:18,
    name: "Virat Kohli",
    image: "https://i.pinimg.com/736x/0e/d5/8c/0ed58cccd51c4758e634d0b29e8cb0c2.jpg",
    runs: 12898,
    wickets: 4,
    isPlaying: true
  },
  {
     id: 3,
    jersy:7,
    name: "MS Dhoni",
    image: "https://th.bing.com/th/id/OIP.ey4VV88ge5lUIqpFaxe-nwHaQB?w=202&h=364&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    runs: 10773,
    wickets: 1,
    isPlaying: false
  }
];

  constructor(  private _snackBar : SnackBarService ) { }

  ngOnInit(): void {
  }

  getNewCricketreObj(newObj : Icricketers){
    this.cricketerArr.unshift(newObj);
    this._snackBar.openSnackBar(` New Cricketer ${newObj.name} is Added Successfully...!`)
  }
  getRemoveId(removeId : number){
    let getIndex = this.cricketerArr.findIndex(c=> c.id === removeId);
    this.cricketerArr.splice(getIndex,1)
    this._snackBar.openSnackBar(`Cricketer  with ${removeId}  id is Removed Successfully...!`)

  }
  getEditObj(editObj : Icricketers){
    this.editObjForPatch = editObj;

  }
  getUpdatedObj(updatedObj : Icricketers){
    let GET_INDEX = this.cricketerArr.findIndex( c => c.id === updatedObj.id);
    this.cricketerArr[GET_INDEX] = updatedObj;
    this._snackBar.openSnackBar(`Cricketer ${updatedObj.name} is Updated Successfully...!`)
    
  }

}
