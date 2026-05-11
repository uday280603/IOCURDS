import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../const/todo';
import { SnackBarService } from '../../services/snackBar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  selectedTodo !: Itodo;

  todoArr : Itodo[] =[
  {
    todoId: '1',
    todoItem: "HTML",
    isCompleted: true
  },
  {
    todoId: '2',
    todoItem: "CSS",
    isCompleted: true
  },
  {
    todoId: '3',
    todoItem: "JAVASCRIPT",
    isCompleted: true
  }
];

  constructor(private _snackBar : SnackBarService) { }

  ngOnInit(): void {

  }

  onAddTodo(todo:Itodo){
    this.todoArr.unshift(todo)
  }
  getRemoveId(todoId:string){
    let getIndex = this.todoArr.findIndex(t => t.todoId === todoId);
    this.todoArr.splice(getIndex,1);
    this._snackBar.openSnackBar(`Todo Item Removed Successfully..!`)
  }
  getEditObj(todo:Itodo){
    console.log(todo);

    this.selectedTodo = todo;

    

  }


}
