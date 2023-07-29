import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ResponseModel } from 'src/auth/jwtService';
import { AjaxService } from 'src/provider/ajax.service';
import { iNavigation } from 'src/provider/iNavigation';

@Component({
  selector: 'app-managestudent',
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.scss']
})
export class ManagestudentComponent implements OnInit {

  studentDetailForm!: FormGroup;

  model: NgbDateStruct;
  DateOfFeesPaymentModel: NgbDateStruct;
  refIdCardIssueDateModel: NgbDateStruct;

  constructor(private fb: FormBuilder,
              private http: AjaxService,
              private nav: iNavigation){}

  ngOnInit(): void {
    this.initForm()
  }

  addStudentDetail(){
    let value = this.studentDetailForm.value;
    this.http.post("studentDetail/addStudentDetail", value).then((res:ResponseModel) => {
      if(res.ResponseBody)
        alert("Data has been added in StudentDetail");
    }).catch(e => {
      alert(e.message)
    })
    console.log(value);

  }

  dateOfJoiningSelection(e: NgbDateStruct) {
    let date = new Date(e.year, e.month - 1, e.day);
    this.studentDetailForm.controls["dateOfJoining"].setValue(date);
  }

  dateOfFeesPaymentSelection(e: NgbDateStruct) {
    let date = new Date(e.year, e.month - 1, e.day);
    this.studentDetailForm.controls["dateOfFeesPayment"].setValue(date);
  }

  refIdCardIssueDateSelection(e: NgbDateStruct) {
    let date = new Date(e.year, e.month - 1, e.day);
    this.studentDetailForm.controls["refIdCardIssueDate"].setValue(date);
  }


  urllink:string="assets/images/userProfile1.png";
  selectFiles(event){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.urllink = event.target.result
      }
    }
  }

  initForm(){
    this.studentDetailForm = this.fb.group({
      studentName: new FormControl(""),
      mobile: new FormControl(""),
      email: new FormControl(""),
      seatNo: new FormControl(""),
      amount: new FormControl(""),
      dateOfJoining: new FormControl(""),
      dateOfFeesPayment: new FormControl(""),
      lockerFesility: new FormControl(""),
      lockerNo: new FormControl(""),
      lockerFees: new FormControl(""),
      refIdCardIssued: new FormControl(""),
      refIdCardIssueDate: new FormControl(""),
      cardDeposit: new FormControl(""),
      remarks: new FormControl("")

    })
  }

}
