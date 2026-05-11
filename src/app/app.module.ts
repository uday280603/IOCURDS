import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { PostDashboardComponent } from './shared/component/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/component/post-form/post-form.component';
import { PostListComponent } from './shared/component/post-list/post-list.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { EmployeeDashboardComponent } from './shared/component/employee-dashboard/employee-dashboard.component';
import { EmployeeListComponent } from './shared/component/employee-list/employee-list.component';
import { EmployeeFormComponent } from './shared/component/employee-form/employee-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    PostDashboardComponent,
    PostFormComponent,
    PostListComponent,
    GetConfirmComponent,
    EmployeeDashboardComponent,
    EmployeeListComponent,
    EmployeeFormComponent
  
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
