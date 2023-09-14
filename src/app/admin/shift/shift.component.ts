import { Component, OnInit } from '@angular/core';
import { ResponseModel } from 'src/auth/jwtService';
import { AjaxService } from 'src/provider/ajax.service';
import { ShiftDetails } from 'src/provider/constants';
import { Filter, iNavigation } from 'src/provider/iNavigation';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  allShift: Array<any> = [];
  isRecordFound: boolean = false;
  shiftData: Filter = new Filter();
  orderByTypeAsc: boolean = null;
  orderByFeesPerMonthAsc: boolean = null;
  orderByFeesQuaterlyAsc: boolean = null;
  orderByFeesHalfYearlyAsc: boolean = null;
  isLoading: boolean = false;
  shiftDetail: ShiftDetail = new ShiftDetail();
  counts: Array<number> = [];

  constructor(private http: AjaxService,
              private nav: iNavigation){}

  ngOnInit(): void {
    this.loadShiftData();
    for (let i = 0; i < 30; i++) {
      this.counts.push(i+1);
    }
  }

  loadShiftData(){
    this.isRecordFound = false;
    this.isLoading = true;
    this.http.get("shiftDetail/getAllShiftDetail").then((res:ResponseModel) => {
      if(res.ResponseBody){
        this.allShift = res.ResponseBody;
        this.shiftData.TotalRecords = this.allShift.length;
        this.isRecordFound = true;
        this.isLoading = false;
        console.log(this.allShift)
      }
    }).catch(e => {
      console.log(e.error);
    })
  }


  updateShiftDetail(item: ShiftDetail){
    this.nav.navigate(ShiftDetails, item);
  }

  navShiftDetail(){
    this.nav.navigate(ShiftDetails, null);
  }


  GetFilterResult(e: Filter) {
    if(e != null) {
      this.shiftData = e;
      this.loadShiftData();
      
      
    }
  }

  arrangeDetails(flag: any, FieldName: string) {
    let Order = '';
    if(flag || flag == null) {
      Order = 'Asc';
    } else {
      Order = 'Desc';
    }
    if (FieldName == 'Type') {
      this.orderByTypeAsc = !flag;
      this.orderByFeesPerMonthAsc = null;
      this.orderByFeesQuaterlyAsc = null;
      this.orderByFeesHalfYearlyAsc = null;
    } else if (FieldName == 'FeesPerMonth') {
      this.orderByFeesPerMonthAsc = !flag;
      this.orderByFeesQuaterlyAsc = null;
      this.orderByTypeAsc = null;
      this.orderByFeesHalfYearlyAsc = null;
    }
    else if (FieldName == 'FeesQuaterly') {
      this.orderByFeesQuaterlyAsc = !flag;
      this.orderByTypeAsc = null;
      this.orderByFeesPerMonthAsc = null;
      this.orderByFeesHalfYearlyAsc = null;
    }
    if (FieldName == 'FeesHalfYearly') {
      this.orderByFeesHalfYearlyAsc = !flag;
      this.orderByFeesQuaterlyAsc = null;
      this.orderByTypeAsc = null;
      this.orderByFeesPerMonthAsc = null;
    this.shiftData = new Filter();
    this.shiftData.SortBy = FieldName +" "+ Order;
  }
}

  filterRecords() {
    let searchQuery = "";
    let delimiter = "";
    this.shiftData.SearchString = "";
  }

  resetFilter() {
    this.shiftData = new Filter();
    this.shiftDetail.type="";
    this.shiftDetail.feesPerMonth= 0;
    this.shiftDetail.feesQuaterly= 0;
    this.shiftDetail.feesHalfYearly=0;
    this.loadShiftData();
    
  }

}

export class ShiftDetail{
  shiftId: number = 0;
  type: String = null;
  feesPerMonth: number = 0;
  feesQuaterly: number = 0;
  feesHalfYearly: number = 0;


}
