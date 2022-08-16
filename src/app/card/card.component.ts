import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() actualData= null;
  public subs: Observable<any> | undefined;
  constructor( private cs: CommonService){}

  ngOnInit(): void {

    this.subs = this.cs.callApi(this.actualData);

  }

}
