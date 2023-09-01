import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import { StudentComponent } from './student/student.component';
import { Dashboard, ManageStudent, Shift, ShiftDetails, Student } from 'src/provider/constants';
import { ShiftComponent } from './shift/shift.component';
import { ShiftdetailComponent } from './shiftdetail/shiftdetail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path: Dashboard, component:DashboardComponent},
  {path: ManageStudent, component:ManagestudentComponent},
  {path: Student, component:StudentComponent},
  {path: Shift, component:ShiftComponent},
  {path: ShiftDetails, component:ShiftdetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }