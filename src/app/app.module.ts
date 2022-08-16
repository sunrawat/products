import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HideDirective } from './structural-directive/hide.directive';
import { CardComponent } from './card/card.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoadedComponent } from './loaded/loaded.component';

@NgModule({
  declarations: [
    AppComponent,
    HideDirective,
    CardComponent,
    CardBodyComponent,
    LoadedComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
