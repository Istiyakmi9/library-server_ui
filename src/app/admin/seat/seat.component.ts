import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeatComponent implements OnInit{
  dragForm: FormGroup;
  list: Array<number> = [];
  constructor(private fb: FormBuilder){};

  ngOnInit(): void {
    this.list.push(0)
  }

  allowDrop(event) {
    event.preventDefault();
  }

  create(e: any) {
    e.stopPropagation();
    e.preventDefault();
    // let tag = document.createElement('div');
    // tag.className="sample-box";
    // tag.appendChild(document.createTextNode("Drag me around"));
    // let target = <HTMLElement> document.getElementById("box-container");
    // target.appendChild(tag);
    this.list.push(this.list.length + 1);
    // alert("hi");
  }

  dragleaveEvent() {
    alert("working");
  }
  
  initForm() {
    this.dragForm = this.fb.group({
      chairs: this.fb.array([this.buildChairArray()])
    });
  }

  buildChairArray() {
    return this.fb.group({
      chair: new FormControl()
    })
  }

  addChair() {
    let groupArray = this.dragForm.get("chairs") as FormArray;
    groupArray.push(this.buildChairArray);
  }

  getArray(): FormArray {
    return  (<FormArray>this.dragForm.get("chairs"));
  }


}
