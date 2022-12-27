import { AfterViewInit, Component, Pipe, PipeTransform, VERSION, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  search = '';
  isFocus = false;
  data:any = {
    body: [
      {
        name: 'Accumulator',
        subcategories: [
          {
            name: 'Benefits',
            subcategories: [
              {
                name: 'Discrepancy',
              },
              {
                name: 'Kiscrepancy',
              },
            ],
          },
          {
            name: 'j Benefits',
            subcategories: [
              {
                name: 'j Discrepancy',
              },
              {
                name: 'j Kiscrepancy',
              },
            ],
          },
        ],
      },
      {
        name: 'Bccumulator',
        subcategories: [
          {
            name: 'Cenefits',
            subcategories: [
              {
                name: 'Eiscrepancy',
              },
              {
                name: 'Fiscrepancy',
              },
            ],
          },
          {
            name: 'H Benefits',
            subcategories: [
              {
                name: 'j Discrepancy',
              },
              {
                name: 'H Kiscrepancy',
              },
            ],
          },
        ],
      },
      {
        name: 'k',
        subcategories: [
          {
            name: 'aa',
            subcategories: [
              {
                name: 'bb',
              }
            ],
          },
          {
            name: 'H Benefits',
            subcategories: [
              {
                name: 'j Discrepancy',
              },
              {
                name: 'H Kiscrepancy',
              },
            ],
          },
        ],
      },
    ],
  };
  myControl: FormControl = new FormControl('');
  options: any = [
    
  ];
  filteredOptions!: Observable<any[]>;

  ngOnInit() {
    this.options = [];
     this.data.body.forEach((element:any) => {
      element.searchTearm.forEach((element2:any) => {
         this.options.push(element2.toLowerCase())
      })
     });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }
  getPosts(value: any) {
    value = value.replace('<strong>', '');
    value = value.replace('</strong>', '');
    console.log(value);
    this.myControl.setValue(value);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option:any) =>
       option.toLowerCase().includes(filterValue)
    );
  }
  onFocus() {
    this.isFocus = !this.isFocus;
  }
  onBlur() {
    this.isFocus = !this.isFocus;
  }
  constructor() {
    this.data.body = this.data.body.map((r1: any) => {
      if(!r1.searchTearm) {
        r1.searchTearm = [];
      }
      r1.subcategories.map((r2:any) => {
        r2.subcategories.map((r3:any) => {
          const name = r1.name + '>' + r2.name + '>' + r3.name
          r1.searchTearm.push(name);
        });
      });
      return r1;
    });
  }
}

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(values: any[], searchTearm: any): any[] {
    searchTearm = searchTearm.toLowerCase();
    return values.filter((r1:any) => {
      const newTerm2 = searchTearm.replaceAll('>', ' ');
      return r1.searchTearm.filter((r: any)=>{
        const newTerm1 = r.toLowerCase().replaceAll('>', ' ');
        return newTerm1.indexOf(newTerm2)> -1;
      }) !=false;
    });
  }
}

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(text: any, search:any): any {
    console.log(text)
    return text.map((r:any)=>{
      return search ? r.replace(search, `<strong>${search}</strong>`) : r;
    })
  }
}