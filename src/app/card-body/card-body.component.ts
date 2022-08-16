import { Component, Input, OnInit } from '@angular/core';
import { Observable, shareReplay, switchMap, timer } from 'rxjs';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {
  @Input() body:any;
  
  @Input() local!: Observable<any>;
  

  ngOnInit(): void {
   }

}
