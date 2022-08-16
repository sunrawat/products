import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  index = 0;

  //https://jsonplaceholder.typicode.com/todos
  constructor(private http: HttpClient) { }
  getUser(url: string, id: string): Observable<any> {
    return this.http.get(`${url}/${id}`).pipe(
    map((r:any)=>{
      r.id = this.index++;
      return r;
    })
    )
  }
}
