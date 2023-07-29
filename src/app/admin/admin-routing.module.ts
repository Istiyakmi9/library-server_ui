import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path: 'admin/dashboard', component:DashboardComponent},
  {path: 'admin/managestudent', component:ManagestudentComponent},
  {path: 'admin/student', component:StudentComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }