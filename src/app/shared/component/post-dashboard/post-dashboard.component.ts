import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../const/post';
import { SnackBarService } from '../../services/snackBar.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  postArr : Ipost[] = [
  {
    postId: "1",
    postTitle: "Getting Started with Angular",
    content: "Angular is a powerful frontend framework developed by Google. It helps build scalable and dynamic web applications."
  },
  {
    postId: "2",
    postTitle: "Introduction to TypeScript",
    content: "TypeScript is a superset of JavaScript with static typing. It improves code quality and developer experience."
  },
  {
    postId: "3",
    postTitle: "Understanding REST APIs",
    content: "REST APIs allow communication between frontend and backend systems. They commonly use HTTP methods like GET and POST."
  },
  {
    postId: "4",
    postTitle: "Why Use Spring Boot",
    content: "Spring Boot simplifies Java backend development. It provides auto-configuration and embedded servers."
  },
  {
    postId: "5",
    postTitle: "Benefits of Angular Material",
    content: "Angular Material provides prebuilt UI components. It helps create responsive and modern web interfaces quickly."
  }
];

  constructor(private _snackBar:SnackBarService) { }

  ngOnInit(): void {
  }
  onPostAdd(post:Ipost){
    this.postArr.unshift(post);
    this._snackBar.openSnackBar(`New Post ${post.postTitle} is added successfully..!`);


  }
  onRemoveId(id:string){
    let getIndex = this.postArr.findIndex(p =>p.postId === id );
    this.postArr.splice(getIndex,1);
    this._snackBar.openSnackBar(`Post deleted succesfully....!`);
  }

}
