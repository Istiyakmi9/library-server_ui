import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import { StudentComponent } from './student/student.component';
import { Dashboard, ManageStudent, MasterData, Payment, PaymentDetails, SeatData, Shift, ShiftDetails, Student, SubscriptionPlanDetails, SubscriptionPlans } from 'src/provider/constants';
import { ShiftComponent } from './shift/shift.component';
import { ShiftdetailComponent } from './shiftdetail/shiftdetail.component';
import { MasterComponent } from './master/master.component';
import { SeatComponent } from './seat/seat.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { SubscriptionplanDetailComponent } from './subscriptionplan-detail/subscriptionplan-detail.component';
import { SubscriptionplanComponent } from './subscriptionplan/subscriptionplan.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path: Dashboard, component:DashboardComponent},
  {path: ManageStudent, component:ManagestudentComponent},
  {path: Student, component:StudentComponent},
  {path: Shift, component:ShiftComponent},
  {path: ShiftDetails, component:ShiftdetailComponent},
  {path: MasterData, component:MasterComponent },
  {path: SeatData, component:SeatComponent},
  {path: Payment, component:PaymentComponent},
  {path: PaymentDetails, component:PaymentDetailComponent},
  {path: SubscriptionPlans, component:SubscriptionplanComponent},
  {path: SubscriptionPlanDetails, component: SubscriptionplanDetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }