import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AjaxService } from 'src/provider/ajax.service';
import { iNavigation } from 'src/provider/iNavigation';
import { PaymentDetail } from '../payment/payment.component';
import { Payment } from 'src/provider/constants';
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

  constructor(private fb : FormBuilder,
    private http : AjaxService,
    private nav : iNavigation){}

  ngOnInit(): void {
    this.initForm();
   
  }

  addPaymnettDetail(){

  }

  updatePaymentDetail(){

  }

  initForm(){
    this.paymentDetailForm = this.fb.group({
      month : new FormControl(this.paymentDetail.month),
      year : new FormControl(this.paymentDetail.year),
      paymentMode: new FormControl(this.paymentDetail.paymentMode),
      amount: new FormControl(this.paymentDetail.amount),
      paymentStatus: new FormControl(this.paymentDetail.paymentStatus),
      referenceLink: new FormControl(this.paymentDetail.referenceLink),
      paymentReferenceId: new FormControl(this.paymentDetail.paymentReferenceId),
      paymentDate: new FormControl(this.paymentDetail.paymentDate),
      approvedBy: new FormControl(this.paymentDetail.approvedBy),
      approvedOn: new FormControl(this.paymentDetail.approvedBy)

    })
  }

  goToPayment(){
    $('#messageModalPayment').modal('hide');
    this.nav.navigate(Payment, null)
  }


}
