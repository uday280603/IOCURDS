import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../const/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  todoArr : Itodo[] =[
  {
    todoId: '1',
    todoItem: "Complete Spring Boot project setup",
    isCompleted: false
  },
  {
    todoId: '2',
    todoItem: "Prepare interview questions for Java",
    isCompleted: true
  },
  {
    todoId: '3',
    todoItem: "Write unit tests for service layer",
    isCompleted: false
  },
  {
    todoId: '4',
    todoItem: "Update LinkedIn profile",
    isCompleted: true
  },
  {
    todoId: '5',
    todoItem: "Practice REST API development",
    isCompleted: false
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
