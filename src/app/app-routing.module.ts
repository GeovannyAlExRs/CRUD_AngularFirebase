import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { EmploymentHomeComponent } from './components/employment-home/employment-home.component';
import { EmploymentListComponent } from './components/employment-list/employment-list.component';
import { EmploymentCreateComponent } from './components/employment-create/employment-create.component';

const routes: Routes = [
  {path: '', component: EmploymentHomeComponent},
  {path: 'list-employments', component: EmploymentListComponent},
  {path: 'create-employment', component: EmploymentCreateComponent},
  {path: 'edit-employment/:id', component: EmploymentCreateComponent},
  {path: '**', redirectTo: '', pathMatch:'full'}  
]; // sets up routes constant where you define your routes



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
