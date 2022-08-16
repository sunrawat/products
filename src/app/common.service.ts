import { Injectable } from '@angular/core';
import { Observable, switchMap, timer } from 'rxjs';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  subscriptions:  Observable<any> | undefined;

  constructor(private cs: CardService) { }

  callApi(config: any) {
    const interval = config.interval;
    const url = config.url;
    const id = config.id;
    this.subscriptions = timer(0, interval).pipe(
      switchMap(()=>{
       return this.cs.getUser(url, id);
      })
    );
    return this.subscriptions;
  }
  
}
