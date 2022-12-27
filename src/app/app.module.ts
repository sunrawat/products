import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent, HighlightPipe, SearchPipe } from './app.component';
import { HideDirective } from './structural-directive/hide.directive';
import { CardComponent } from './card/card.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoadedComponent } from './loaded/loaded.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    HideDirective,
    CardComponent,
    CardBodyComponent,
    LoadedComponent,
    SearchPipe,
    HighlightPipe
  ],
  imports: [
    NgxDaterangepickerMd.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoadedComponent,
        pathMatch: 'full'
      },
     {
      path: 'test',
      pathMatch: 'full',
      component: TestComponent
     }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
