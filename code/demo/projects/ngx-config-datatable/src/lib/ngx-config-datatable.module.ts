import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtnSortComponent } from './datatable/components/btn-sort/btn-sort.component';
import { DatatableComponent } from './datatable/components/datatable.component';

@NgModule({
  declarations: [
    BtnSortComponent,
    DatatableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnSortComponent,
    DatatableComponent
  ]
})
export class NgxConfigDatatableModule { }
