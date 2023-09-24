import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { UtilModule } from '../util/util.module';
import { ShiftComponent } from './shift/shift.component';
import { ShiftdetailComponent } from './shiftdetail/shiftdetail.component';
import { MasterComponent } from './master/master.component';
import { SeatComponent } from './seat/seat.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ManagestudentComponent,
    StudentComponent,
    ShiftComponent,
    ShiftdetailComponent,
    MasterComponent,
    SeatComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    UtilModule
  ]
})
export class AdminModule { }
