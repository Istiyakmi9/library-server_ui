import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/provider/ajax.service';
import { PaymentDetails } from 'src/provider/constants';
import { Filter, iNavigation } from 'src/provider/iNavigation';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  isRecordFound: boolean = false;
    paymentData: Filter = new Filter();
    orderByMonthAsc: boolean = null;
    orderByYearAsc: boolean = null;
    orderByPaymentModeAsc: boolean = null;
    orderByAmountAsc: boolean = null;

    isLoading: boolean = false;
    // shiftDetail:any = null;
    paymentDetail: PaymentDetail = new PaymentDetail();
  
  constructor(private http: AjaxService,
                private nav: iNavigation){}
  
  ngOnInit(): void {
    
  }

  navPaymentDetail(){
    this.nav.navigate(PaymentDetails, null);
  }
  
  GetFilterResult(e: Filter) {
        if(e != null) {
          this.paymentData = e;
        
        }
      }
    
    arrangeDetails(flag: any, FieldName: string) {
        let Order = '';
        if(flag || flag == null) {
          Order = 'Asc';
        } else {
          Order = 'Desc';
        }
        if (FieldName == 'Month') {
          this.orderByMonthAsc = !flag;
          this.orderByYearAsc = null;
          this.orderByPaymentModeAsc = null;
          this.orderByAmountAsc = null;
        } else if (FieldName == 'Year') {
          this.orderByYearAsc = !flag;
          this.orderByMonthAsc = null;
          this.orderByPaymentModeAsc = null;
          this.orderByAmountAsc = null;
        }
        else if (FieldName == 'PaymentMode') {
          this.orderByPaymentModeAsc = !flag;
          this.orderByMonthAsc = null;
          this.orderByYearAsc = null;
          this.orderByAmountAsc = null;
        }
        if (FieldName == 'Amount') {
          this.orderByAmountAsc = !flag;
          this.orderByMonthAsc = null;
          this.orderByYearAsc = null;
          this.orderByPaymentModeAsc = null;
          this.paymentData = new Filter();
          this.paymentData.SortBy = FieldName +" "+ Order;
      }
    }
    
    filterRecords() {
      let searchQuery = "";
      let delimiter = "";
      this.paymentData.SearchString = "";
    }
    
    resetFilter() {
      this.paymentData = new Filter();
      this.paymentDetail.month=0;
      this.paymentDetail.year= 0;
      this.paymentDetail.paymentMode= null;
      this.paymentDetail.amount=0;
      
      }
    
    }
    
    export class PaymentDetail{
      paymentId: number = 0;
      userId: number = 0;
      month: number = 0;
      year: number = 0;
      paymentMode: String = null;
      amount: number = 0;
      paymentStatus: number = 0;
      referenceLink: string = null;
      paymentReferenceId: string = null;
      paymentDate: Date = null;
      approvedBy: number = null;
      approvedOn: Date = null;

    }