import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ResponseModel } from 'src/auth/jwtService';
import { AjaxService } from 'src/provider/ajax.service';
import { UserImage } from 'src/provider/constants';
import { iNavigation } from 'src/provider/iNavigation';
import { Student } from '../student/student.component';

@Component({
  selector: 'app-managestudent',
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.scss']
})
export class ManagestudentComponent implements OnInit {

  studentDetailForm!: FormGroup;
  profileURL: string = UserImage;
  model: NgbDateStruct;
  DateOfFeesPaymentModel: NgbDateStruct;
  refIdCardIssueDateModel: NgbDateStruct;
  isLoading: boolean = false;
  studentDetail: Student = new Student();

  constructor(private fb: FormBuilder,
              private http: AjaxService,
              private nav: iNavigation){}

  ngOnInit(): void {
    let data = this.nav.getValue();
    if(data){
      this.studentDetail = data;
      this.studentDetail.dateOfJoining = new Date(this.studentDetail.dateOfJoining);
      this.model = { day: this.studentDetail.dateOfJoining.getDate(), month: this.studentDetail.dateOfJoining.getMonth() + 1, year: this.studentDetail.dateOfJoining.getFullYear()};
      this.studentDetail.dateOfFeesPayment = new Date(this.studentDetail.dateOfFeesPayment);
      this.DateOfFeesPaymentModel = { day: this.studentDetail.dateOfFeesPayment.getDate(), month: this.studentDetail.dateOfFeesPayment.getMonth() + 1, year: this.studentDetail.dateOfFeesPayment.getFullYear()};
      this.studentDetail.refIdCardIssueDate = new Date(this.studentDetail.refIdCardIssueDate);
      this.refIdCardIssueDateModel = { day: this.studentDetail.refIdCardIssueDate.getDate(), month: this.studentDetail.refIdCardIssueDate.getMonth() + 1, year: this.studentDetail.refIdCardIssueDate.getFullYear()};
    }
    this.initForm()
  }

  addStudentDetail(){
    this.isLoading = true;
    let value = this.studentDetailForm.value;
    this.http.post("studentDetail/addStudentDetail", value).then((res:ResponseModel) => {
      if(res.ResponseBody) {
        alert("Data has been added in StudentDetail");
        this.isLoading = false;
      }
    }).catch(e => {
      alert(e.message)
    })
  }

  updateStudentDetail(){
   
    
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
      studentName: new FormControl(this.studentDetail.studentName),
      mobile: new FormControl(this.studentDetail.mobile),
      email: new FormControl(this.studentDetail.email),
      seatNo: new FormControl(this.studentDetail.seatNo),
      amount: new FormControl(this.studentDetail.amount),
      dateOfJoining: new FormControl(this.studentDetail.dateOfJoining),
      dateOfFeesPayment: new FormControl(this.studentDetail.dateOfFeesPayment),
      lockerFesility: new FormControl(this.studentDetail.lockerFesility),
      lockerNo: new FormControl(this.studentDetail.lockerNo),
      lockerFees: new FormControl(this.studentDetail.lockerFees),
      refIdCardIssued: new FormControl(this.studentDetail.refIdCardIssued),
      refIdCardIssueDate: new FormControl(this.studentDetail.refIdCardIssueDate),
      cardDeposit: new FormControl(this.studentDetail.cardDeposit),
      remarks: new FormControl(this.studentDetail.remarks)

    })
  }

}
