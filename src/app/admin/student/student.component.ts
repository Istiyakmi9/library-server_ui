import { Component, OnInit } from '@angular/core';
import { ResponseModel } from 'src/auth/jwtService';
import { AjaxService } from 'src/provider/ajax.service';
import { ManageStudent } from 'src/provider/constants';
import { Filter, iNavigation } from 'src/provider/iNavigation';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  allStudent: Array<any> = [];
  isRecordFound: boolean = false;
  studentData: Filter = new Filter();
  orderByNameAsc: boolean = null;
  orderByMobileAsc: boolean = null;
  orderByEmailAsc: boolean = null;
  studentDetail: StudentDetail = new StudentDetail();
  isLoading: boolean = false;

  constructor(private http: AjaxService,
              private nav:iNavigation){}

  ngOnInit(): void {
    this.loadStudentData();
  }

  loadStudentData(){
    this.isRecordFound = false;
    this.isLoading = true;
    this.http.get("studentDetail/getAllStudentDetail").then((res:ResponseModel) => {
      if(res.ResponseBody){
        this.allStudent=res.ResponseBody;
        this.studentData.TotalRecords = this.allStudent.length;
        this.isRecordFound = true;
        this.isLoading = false;
        console.log(this.allStudent);
      }
    }).catch(e => {
      console.log(e.error);
    })
  }

  updateStudentDetail(item: StudentDetail){
    this.nav.navigate(ManageStudent, item)
  }

  navManageStudent() {
    this.nav.navigate(ManageStudent, null);
  }

  GetFilterResult(e: Filter) {
    if(e != null) {
      this.studentData = e;
      this.loadStudentData();
    }
  }

  arrangeDetails(flag: any, FieldName: string) {
    let Order = '';
    if(flag || flag == null) {
      Order = 'Asc';
    } else {
      Order = 'Desc';
    }
    if (FieldName == 'FirstName') {
      this.orderByNameAsc = !flag;
      this.orderByMobileAsc = null;
      this.orderByEmailAsc = null;
    } else if (FieldName == 'Mobile') {
      this.orderByMobileAsc = !flag;
      this.orderByEmailAsc = null;
      this.orderByNameAsc = null;
    }
    if (FieldName == 'Email') {
      this.orderByEmailAsc = !flag;
      this.orderByNameAsc = null;
      this.orderByMobileAsc = null;
    }
    this.studentData = new Filter();
    this.studentData.SortBy = FieldName +" "+ Order;
  }

  filterRecords() {
    let searchQuery = "";
    let delimiter = "";
    this.studentData.SearchString = ""
  }

  resetFilter() {
    this.studentData = new Filter();
    this.studentDetail.studentName="";
    this.studentDetail.mobile = null;
    this.studentDetail.email="";
    this.loadStudentData();
  }
 
}

export class StudentDetail {
  userId: number = 0;
  studentName: string = null;
  mobile: string = null;
  email: string = null;
  seatNo: number = null;
  amount: number = null;
  dateOfJoining: Date = null;
  dateOfFeesPayment: Date = null;
  lockerFesility: boolean = null;
  lockerNo: number = null;
  lockerFees: number = null;
  refIdCardIssued: boolean = null;
  refIdCardIssueDate: Date = null;
  cardDeposit: boolean = null;
  remarks: string = null;
  filePath: string = null;
}
