import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ResponseModel } from 'src/auth/jwtService';
import { AjaxService } from 'src/provider/ajax.service';
import { SubscriptionPlans } from 'src/provider/constants';
import { iNavigation } from 'src/provider/iNavigation';
declare var $: any;

@Component({
  selector: 'app-subscriptionplan-detail',
  templateUrl: './subscriptionplan-detail.component.html',
  styleUrls: ['./subscriptionplan-detail.component.scss']
})
export class SubscriptionplanDetailComponent  implements OnInit{

  subscriptionPlanDetailForm: FormGroup;
  isLoading: boolean = false;
  subscriptionPlanDetail: SubscriptionPlanDetail = new SubscriptionPlanDetail;
  subscriptionId : number = 0;

  constructor(private fb : FormBuilder,
    private http : AjaxService,
    private nav : iNavigation){}

  ngOnInit(): void {
    let data : SubscriptionPlanDetail = this.nav.getValue();
    if(data){
      this.subscriptionId = data.subscriptionId;
      this.loadData();
    }else{
      this.initForm();
    }
   
  }

  loadData(){
    this.http.get(`subscriptionPlan/getSubscriptionPlanBySubscriptionId/${this.subscriptionId}`).then((res:ResponseModel)=>{
      if(res.ResponseBody){
        this.subscriptionPlanDetail = res.ResponseBody;
        this.initForm();
      }
    })
  }

  addSubscriptionPlanDetail(){
    this.isLoading = true;
    let value = this.subscriptionPlanDetailForm.value;
    this.http.post("subscriptionPlan/addSubscriptionPlan", value).then((res:ResponseModel)=>{
      if(res.ResponseBody){
        $('#messageModalSubscriptionPlan').modal('show');
        this.isLoading = false;
      }
    }).catch(e => {
      alert(e.message)
    })
  }

  updateSubscriptionPlanDetail(){
    this.isLoading = true;
    let value = this.subscriptionPlanDetailForm.value;
    this.http.put(`subscriptionPlan/updateSubscriptionPlan/${this.subscriptionPlanDetail.subscriptionId}`, value).then((res:ResponseModel)=>{
      if(res.ResponseBody){
        $('#messageModalSubscriptionPlan').modal('show');
        this.isLoading = false;
      }
    }).catch(e => {
      alert(e.message)
    })

  }

  initForm(){
    this.subscriptionPlanDetailForm = this.fb.group({
      subscriptionName : new FormControl(this.subscriptionPlanDetail.subscriptionName),
      subscriptionDescription : new FormControl(this.subscriptionPlanDetail.subscriptionDescription),
      isMonthlySubscription : new FormControl(this.subscriptionPlanDetail.isMonthlySubscription),
      numberOfMonths : new FormControl(this.subscriptionPlanDetail.numberOfMonths),
      monthlyAmount : new FormControl(this.subscriptionPlanDetail.monthlyAmount),
      isHourlySubscription : new FormControl(this.subscriptionPlanDetail.isHourlySubscription),
      hourlyAmount : new FormControl(this.subscriptionPlanDetail.hourlyAmount),
      numberOfHours : new FormControl(this.subscriptionPlanDetail.numberOfHours),
      finalAmountPerMonth : new FormControl(this.subscriptionPlanDetail.finalAmountPerMonth) 

    })
  }

  goToSubscriptionPlan(){
    $('#messageModalSubscriptionPlan').modal('hide');
    this.nav.navigate(SubscriptionPlans, null)
  }

}

 export class SubscriptionPlanDetail{
  subscriptionId : number = 0;
  libraryId : number = 0;
  subscriptionName : String = null;
  subscriptionDescription : String = null;
  isMonthlySubscription : Boolean = false;
  numberOfMonths : number = 0;
  monthlyAmount : number = 0;
  isHourlySubscription : Boolean = false;
  hourlyAmount : number = 0;
  numberOfHours : number = 0;
  finalAmountPerMonth : number = 0;

 } 