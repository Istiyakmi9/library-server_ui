import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/provider/ajax.service';
import { iNavigation } from 'src/provider/iNavigation';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit{

  counts: Array<number> = [];

  constructor(private http: AjaxService,
    private nav: iNavigation){}

    ngOnInit(): void {

      for (let i = 0; i < 100; i++) {
        this.counts.push(i+1);
      }
      
    }

}
