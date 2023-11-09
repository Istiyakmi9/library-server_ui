import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AjaxService } from 'src/provider/ajax.service';
import { iNavigation } from 'src/provider/iNavigation';
import { PaymentDetail } from '../payment/payment.component';
import { Payment } from 'src/provider/constants';
import { ResponseModel } from 'src/auth/jwtService';
declare var $: any;

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailComponent implements OnInit {

  paymentDetailForm: FormGroup;
  isLoading: boolean = false;
  paymentDetail: PaymentDetail = new PaymentDetail;
  transactionId: number = 0;

  constructor(private fb : FormBuilder,
    private http : AjaxService,
    private nav : iNavigation){}

  ngOnInit(): void {
    let data : PaymentDetail = this.nav.getValue();
    if(data){
      this.transactionId = data.transactionId;
      this.loadData();
    }else{
      this.initForm();
    }
  }

  loadData(){
    this.http.get(`paymentTransaction/getPaymentTransactionByTransactionId/${this.transactionId}`).then((res:ResponseModel)=>{
      if(res.ResponseBody){
        this.paymentDetail = res.ResponseBody;
        this.initForm();
      }
    })
  }

  addPaymnettDetail(){
    this.isLoading = true;
    let value = this.paymentDetailForm.value;
    this.http.post("paymentTransaction/addPaymentTransaction", value).then((res : ResponseModel)=>{
      if(res.ResponseBody){
        $('messageModalPayment').modal('show');
        this.isLoading = false;
      }
    }).catch(e =>{
      alert(e.message);
    })
  }

  updatePaymentDetail(){
    this.isLoading = true;
    let value = this.paymentDetailForm.value;
    this.http.put(`paymentTransaction/updatePaymentTransaction/${this.paymentDetail.transactionId}`, value).then((res:ResponseModel)=>{
      if(res.ResponseBody){
        $('messageModalPayment').modal('show');
        this.isLoading = false;
      }
    }).catch(e => {
      alert(e.message)
    })
  }

  initForm(){
    this.paymentDetailForm = this.fb.group({
      month : new FormControl(this.paymentDetail.month),
      year : new FormControl(this.paymentDetail.year),
      amountReceived: new FormControl(this.paymentDetail.amountReceived),
      discountCode: new FormControl(this.paymentDetail.discountCode),
      finalAmountAfterDiscount: new FormControl(this.paymentDetail.finalAmountAfterDiscount),
      modeOfPayment: new FormControl(this.paymentDetail.modeOfPayment),
      transactionReferenceId: new FormControl(this.paymentDetail.transactionReferenceId),
      referenceLink: new FormControl(this.paymentDetail.referenceLink),
      paymentStatusId: new FormControl(this.paymentDetail.paymentStatusId),
      transactionDate: new FormControl(this.paymentDetail.transactionDate)
    })
  }

  goToPayment(){
    $('#messageModalPayment').modal('hide');
    this.nav.navigate(Payment, null)
  }


}
function ResponseModel(reason: any): PromiseLike<never> {
  throw new Error('Function not implemented.');
}

function res(value: any) {
  throw new Error('Function not implemented.');
}

