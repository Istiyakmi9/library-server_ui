import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/provider/ajax.service';
import { SubscriptionPlanDetails, SubscriptionPlans } from 'src/provider/constants';
import { Filter, iNavigation } from 'src/provider/iNavigation';
import { SubscriptionPlanDetail } from '../subscriptionplan-detail/subscriptionplan-detail.component';
import { ResponseModel } from 'src/auth/jwtService';
import { Toast } from 'src/provider/common-service/common.service';

@Component({
  selector: 'app-subscriptionplan',
  templateUrl: './subscriptionplan.component.html',
  styleUrls: ['./subscriptionplan.component.scss']
})
export class SubscriptionplanComponent implements OnInit {

  allSubscription: Array<any> = [];
  isRecordFound: boolean = false;
  subscriptionData: Filter = new Filter();
  orderBySubscriptionNameAsc : boolean = null;
  orderBySubscriptionDescriptionAsc : boolean = null;
  orderByNumberOfMonthsAsc : boolean = null;
  orderByMonthlyAmountAsc : boolean = null;

  isLoading: boolean = false;
  subscriptionPlanDetail : SubscriptionPlanDetail = new SubscriptionPlanDetail();


  constructor(private http: AjaxService,
                private nav: iNavigation){}
  
  ngOnInit(): void {
    this.loadSubscriptionData();
  }

  loadSubscriptionData(){
    this.isRecordFound = false;
    this.isLoading = true;
    this.http.get("subscriptionPlan/getAllSubscriptionPlan").then((res:ResponseModel) => {
      if(res.ResponseBody){
        this.allSubscription = res.ResponseBody;
        this.subscriptionData.TotalRecords = this.allSubscription.length;
        this.isRecordFound = true;
        this.isLoading = false;
        // console.log(this.allShift)
        Toast("Data loaded successfully")
      }
    }).catch(e => {
      console.log(e.error);
    })
  }

  updateSubscriptionDetail(item : SubscriptionPlanDetail){
    this.nav.navigate(SubscriptionPlanDetails, item);
  }

  navSubscriptionPlanDetail(){
    this.nav.navigate(SubscriptionPlanDetails, null);
  }
  
  GetFilterResult(e: Filter) {
    if(e != null) {
      this.subscriptionData = e;
      this.loadSubscriptionData();
      
    }
      }
    
    arrangeDetails(flag: any, FieldName: string) {
        let Order = '';
        if(flag || flag == null) {
          Order = 'Asc';
        } else {
          Order = 'Desc';
        }
        if (FieldName == 'SubscriptionName') {
          this.orderBySubscriptionNameAsc = !flag;
          this.orderBySubscriptionDescriptionAsc = null;
          this.orderByNumberOfMonthsAsc = null;
          this.orderByMonthlyAmountAsc = null;
        } else if (FieldName == 'SubscriptionDescription') {
          this.orderBySubscriptionDescriptionAsc = !flag;
          this.orderBySubscriptionNameAsc = null;
          this.orderByNumberOfMonthsAsc = null;
          this.orderByMonthlyAmountAsc = null;
        }
        else if (FieldName == 'NumberOfMonths') {
          this.orderByNumberOfMonthsAsc = !flag;
          this.orderBySubscriptionNameAsc = null;
          this.orderBySubscriptionDescriptionAsc = null;
          this.orderByMonthlyAmountAsc = null;
        }
        if (FieldName == 'MonthlyAmount') {
          this.orderByMonthlyAmountAsc = !flag;
          this.orderBySubscriptionNameAsc = null;
          this.orderBySubscriptionDescriptionAsc = null;
          this.orderByNumberOfMonthsAsc = null;

          this.subscriptionData = new Filter();
          this.subscriptionData.SortBy = FieldName +" "+ Order;
      }
    }
    
    filterRecords() {
      let searchQuery = "";
      let delimiter = "";
      this.subscriptionData.SearchString = "";
    }
    
    resetFilter() {
      this.subscriptionData = new Filter();
      this.subscriptionPlanDetail.subscriptionName=null;
      this.subscriptionPlanDetail.subscriptionDescription= null;
      this.subscriptionPlanDetail.numberOfMonths= null;
      this.subscriptionPlanDetail.monthlyAmount=0;
      
      }
    
    }

