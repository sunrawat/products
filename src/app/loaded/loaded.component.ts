import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-loaded',
  templateUrl: './loaded.component.html',
  styleUrls: ['./loaded.component.scss']
})
export class LoadedComponent implements OnInit {

  constructor( private cs: CommonService){
    for(let i=0;i< 16;i++) {
      this.data.push({
        id: i,
        interval: 1000 + i,
        url: 'https://jsonplaceholder.typicode.com/todos'
      })
    }
  }

  title = 'siemens';
  action = false;
  actualData: any = [];
  data: any  = [];
  showHide() {
    this.action = !this.action;
  }
  ngOnInit() {
    // timer();
   this.actualData = this.data;
  }
  trackByFn(index: number, item: any) {
    return index;
  }
}
