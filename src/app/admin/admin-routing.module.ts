import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import { StudentComponent } from './student/student.component';
import { Dashboard, ManageStudent, MasterData, SeatData, Shift, ShiftDetails, Student } from 'src/provider/constants';
import { ShiftComponent } from './shift/shift.component';
import { ShiftdetailComponent } from './shiftdetail/shiftdetail.component';
import { MasterComponent } from './master/master.component';
import { SeatComponent } from './seat/seat.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path: Dashboard, component:DashboardComponent},
  {path: ManageStudent, component:ManagestudentComponent},
  {path: Student, component:StudentComponent},
  {path: Shift, component:ShiftComponent},
  {path: ShiftDetails, component:ShiftdetailComponent},
  {path: MasterData, component:MasterComponent },
  {path: SeatData, component:SeatComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }