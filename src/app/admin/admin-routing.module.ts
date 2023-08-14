import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import { StudentComponent } from './student/student.component';
import { Dashboard, ManageStudent, Student } from 'src/provider/constants';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path: Dashboard, component:DashboardComponent},
  {path: ManageStudent, component:ManagestudentComponent},
  {path: Student, component:StudentComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }