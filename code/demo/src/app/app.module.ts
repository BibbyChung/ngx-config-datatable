import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import { NgxConfigDatatableModule } from 'ngx-config-datatable';
import { NgxConfigDatatableModule } from '../../projects/ngx-config-datatable/src/public-api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxConfigDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
