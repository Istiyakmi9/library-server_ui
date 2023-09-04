import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AjaxService } from 'src/provider/ajax.service';
import { iNavigation } from 'src/provider/iNavigation';
import { ShiftDetail } from '../shift/shift.component';
import { ResponseModel } from 'src/auth/jwtService';
import { Shift } from 'src/provider/constants';

@Component({
  selector: 'app-shiftdetail',
  templateUrl: './shiftdetail.component.html',
  styleUrls: ['./shiftdetail.component.scss']
})
export class ShiftdetailComponent implements OnInit {

  shiftDetailForm: FormGroup;
  isLoading: boolean = false;
  shiftDetail: ShiftDetail = new ShiftDetail();
  shiftId: number = 0;
  

  constructor(private fb : FormBuilder,
              private http : AjaxService,
              private nav : iNavigation){}

  ngOnInit(): void {
    let data : ShiftDetail = this.nav.getValue();
    if(data){
      this.shiftId = data.shiftId;
      this.loadData();
    }else{
      this.initForm();
    }
  }

  loadData(){
    this.http.get(`shiftDetail/getShiftDetailByShiftId/${this.shiftId}`).then((res:ResponseModel)=>{
      if(res.ResponseBody){
        this.shiftDetail = res.ResponseBody;
        this.initForm();
      }
    })
  }

  addShiftDetail(){
    this.isLoading = true;
    let value = this.shiftDetailForm.value;
    this.http.post("shiftDetail/addShiftDetail", value).then((res:ResponseModel) => {
      if(res.ResponseBody){
        alert("Data has been added in the ShiftDetail");
        this.nav.navigate(Shift, null);
        this.isLoading = false;
      }
    }).catch(e => {
      alert(e.message)
    })
  }

  updateShiftDetail(){
    this.isLoading = true;
    let value = this.shiftDetailForm.value;
    this.http.put(`shiftDetail/updateShiftDetail/${this.shiftDetail.shiftId}`, value).then((res:ResponseModel) => {
      if(res.ResponseBody){
        alert("Data has been updated in ShiftDetail");
        this.nav.navigate(Shift, null);
        this.isLoading = false;
      }
    }).catch(e => {
      alert(e.message)
    })

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
