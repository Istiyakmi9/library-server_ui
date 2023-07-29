import { Component, OnInit } from '@angular/core';
import { ResponseModel } from 'src/auth/jwtService';
import { AjaxService } from 'src/provider/ajax.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  allStudent: Array<any> = [];

  constructor(private http: AjaxService){}

ngOnInit(): void {
  this.loadStudentData();
}

loadStudentData(){
  this.http.get("studentDetail/getAllStudentDetail").then((res:ResponseModel) => {
    if(res.ResponseBody){
      this.allStudent=res.ResponseBody;
      console.log(this.allStudent);
    }
  }).catch(e => {
    console.log(e.error);
  })
}
 
}
