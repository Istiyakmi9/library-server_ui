import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { UtilModule } from '../util/util.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ManagestudentComponent,
    StudentComponent
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
