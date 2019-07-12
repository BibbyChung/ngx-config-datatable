import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtnCommandComponent } from './datatable/components/btn-command/btn-command.component';
import { BtnSortComponent } from './datatable/components/btn-sort/btn-sort.component';
import { DatatableComponent } from './datatable/components/datatable.component';

@NgModule({
  declarations: [
    BtnCommandComponent,
    BtnSortComponent,
    DatatableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnCommandComponent,
    BtnSortComponent,
    DatatableComponent
  ]
})
export class NgxConfigDatatableModule { }
