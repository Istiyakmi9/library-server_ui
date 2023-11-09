import { Component, OnInit } from '@angular/core';
import { ResponseModel } from 'src/auth/jwtService';
import { AjaxService } from 'src/provider/ajax.service';
import { Toast } from 'src/provider/common-service/common.service';
import { PaymentDetails } from 'src/provider/constants';
import { Filter, iNavigation } from 'src/provider/iNavigation';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

    allPayment : Array<any> = [];
    isRecordFound: boolean = false;
    paymentData: Filter = new Filter();
    orderByMonthAsc: boolean = null;
    orderByYearAsc: boolean = null;
    orderByModeOfPaymentAsc: boolean = null;
    orderByAmountReceivedAsc: boolean = null;

    isLoading: boolean = false;
    // shiftDetail:any = null;
    paymentDetail: PaymentDetail = new PaymentDetail();
  
  constructor(private http: AjaxService,
                private nav: iNavigation){}
  
  ngOnInit(): void {
    this.loadPaymentData();
  }

  loadPaymentData(){
    this.isRecordFound = false;
    this.isLoading = true;
    this.http.get("paymentTransaction/getAllPaymentTransaction").then((res:ResponseModel) => {
      if(res.ResponseBody){
        this.allPayment = res.ResponseBody;
        this.paymentData.TotalRecords = this.allPayment.length;
        this.isRecordFound = true;
        this.isLoading = false;
        Toast("Payment Data Loaded successfully");
      }
    }).catch(e =>{
      console.log(e.error);
    })

  }

  updatePaymentDetail(item : PaymentDetail){
    this.nav.navigate(PaymentDetails, item);
  }

  navPaymentDetail(){
    this.nav.navigate(PaymentDetails, null);
  }
  
  GetFilterResult(e: Filter) {
        if(e != null) {
          this.paymentData = e;
          this.loadPaymentData();
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
          this.orderByModeOfPaymentAsc = null;
          this.orderByAmountReceivedAsc = null;
        } else if (FieldName == 'Year') {
          this.orderByYearAsc = !flag;
          this.orderByMonthAsc = null;
          this.orderByModeOfPaymentAsc = null;
          this.orderByAmountReceivedAsc = null;
        }
        else if (FieldName == 'ModeOfPayment') {
          this.orderByModeOfPaymentAsc = !flag;
          this.orderByMonthAsc = null;
          this.orderByYearAsc = null;
          this.orderByAmountReceivedAsc = null;
        }
        if (FieldName == 'AmountReceived') {
          this.orderByAmountReceivedAsc = !flag;
          this.orderByMonthAsc = null;
          this.orderByYearAsc = null;
          this.orderByModeOfPaymentAsc = null;
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
      this.paymentDetail.modeOfPayment= null;
      this.paymentDetail.amountReceived=0;
      this.loadPaymentData();
      
      }
    
    }
    
    export class PaymentDetail{
      transactionId: number = 0;
      studentId: number = 0;
      libraryId: number = 0;
      subscriptionId: number = 0;
      month: number = 0;
      year: number = 0;
      amountReceived: number = 0;
      discountCode: string = null;
      finalAmountAfterDiscount: number = 0;
      modeOfPayment: string = null; 
      transactionReferenceId: string = null;
      referenceLink: string = null;
      paymentStatusId: number = 0;
      transactionDate: Date = null;

    }