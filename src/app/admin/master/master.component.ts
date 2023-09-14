import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/provider/ajax.service';
declare var $: any;

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  isUploadFile: boolean = true;
  file: File;
  fileSize: string;
  fileName: string;
  isFileReady: boolean = false;
  noOfRecords: number;
  recordToUpload: any;
  isDisable: boolean = true;
  isAvailable: boolean = false;
  masterDataDetails: Array<any> = [];
  isLoading: boolean = false;

  constructor(private http: AjaxService) {}

  ngOnInit(): void {
    
  }

  readExcelData(e: any) {
    this.file = e.target.files[0];
    if (this.file !== undefined && this.file !== null) {
      this.fileSize = (this.file.size / 1024).toFixed(2);
      this.fileName = this.file.name;
      this.isFileReady = true;
      this.isDisable = false;
      this.isUploadFile = false;
    }
  }

  excelfireBrowserFile() {
    $("#uploadexcelreader").click();
  }

  cleanFileHandler() {
    $("#uploadexcelreader").val("");
    this.fileSize = "";
    this.fileName = "";
    this.isFileReady = false;
    this.noOfRecords = 0;
    event.stopPropagation();
    event.preventDefault();
    this.isAvailable=false;
    this.isDisable = true;
    this.isUploadFile = true;
  }

  uploadExcel() {
    this.isLoading = true;
    this.isAvailable = true;
    $('#excelSheetReaderModal').modal('hide');
    this.isLoading = false;
  }

  uploadExcelSheet() {
    this.isLoading = true;
    if (this.file) {
      let formData = new FormData();
      formData.append("file", this.file);
      this.http.post("studentDetail/uploadStudentDetailExcelFile", formData)
      .then((response: any) => {
        if (response) {
          this.cleanFileHandler();
          alert("Data Uploaded successfull");
          this.isLoading = false;
        } else {
          alert("Unable to upload the data");
        }
      }).catch(e => {
        alert(e.HttpStatusMessage)
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
      alert("Please upload atleast one record");
    }
  }


}
