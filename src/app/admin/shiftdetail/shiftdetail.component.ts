import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AjaxService } from 'src/provider/ajax.service';
import { iNavigation } from 'src/provider/iNavigation';
import { ShiftDetail } from '../shift/shift.component';

@Component({
  selector: 'app-shiftdetail',
  templateUrl: './shiftdetail.component.html',
  styleUrls: ['./shiftdetail.component.scss']
})
export class ShiftdetailComponent implements OnInit {

  shiftDetailForm: FormGroup;
  isLoading: boolean = false;
  shiftDetail: ShiftDetail = new ShiftDetail();
  

  constructor(private fb : FormBuilder,
              private http : AjaxService,
              private nav : iNavigation){}

  ngOnInit(): void {
    this.initForm();
  }

  addShiftDetail(){

  }

  updateShiftDetail(){

  }

  initForm(){
    this.shiftDetailForm = this.fb.group({
      type : new FormControl(this.shiftDetail.type),
      feesPerMonth: new FormControl(this.shiftDetail.feesPerMonth),
      feesQuaterly: new FormControl(this.shiftDetail.feesQuaterly),
      feesHalfYearly: new FormControl(this.shiftDetail.feesHalfYearly)
    })
  }

}
