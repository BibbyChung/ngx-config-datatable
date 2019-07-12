import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IDatatableSetting } from '../interface/IDatatableSetting';
import { IHeader } from '../interface/IHeader';
import { IIdObject } from '../interface/IIdObject';
import { IRow } from '../interface/IRow';

@Component({
  selector: 'cdt-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnDestroy {

  @Input() className = '';
  @Input()
  set datatableSetting(v: IDatatableSetting) {
    this.datatableSetting$.next(v);
  }
  get datatableSetting() {
    return this.datatableSetting$.getValue();
  }
  @Input()
  set data(v: IIdObject[]) {
    this.data$.next(v);
  }
  get data() {
    return this.data$.getValue();
  }
  @Output() rowCommand = new EventEmitter<{ id: string, type: string }>();
  @Output() sortCommand = new EventEmitter<IHeader>();

  private sub = new Subscription();
  private datatableSetting$ = new BehaviorSubject<IDatatableSetting>(null);
  private data$ = new BehaviorSubject<IIdObject[]>([]);

  rows: IRow[] = [];
  footers: IRow[] = [];

  constructor() {
    this.sub.add(combineLatest(
      this.datatableSetting$,
      this.data$
    ).pipe(
      filter(([datatableSetting, data]) => datatableSetting ? true : false)
    ).subscribe(([datatableSetting, data]) => {
      this.render();
    }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private render() {
    this.rows = [];
    this.footers = [];

    this.addRows();
    this.addSummaryRow();
  }

  changeSort(sortInfo: IHeader) {
    for (const item of this.datatableSetting.headers) {
      if (item.propName !== sortInfo.propName) {
        item.sort = 'none';
      } else {
        item.sort = sortInfo.sort;
      }
    }
    this.sortCommand.emit(sortInfo);
  }

  doCommand(id: string, type: string) {
    this.rowCommand.emit({ id, type });
  }

  private addRows() {
    this.checkDatatableSetting();

    for (const row of this.data) {
      const cs: IRow = {
        id: row.id,
        columns: []
      };
      for (const item of this.datatableSetting.headers) {
        if (!item.isEnabled) {
          continue;
        }
        let vv = row[item.propName];
        if (item.converter) {
          vv = item.converter.to(vv);
        }
        cs.columns.push({
          isHtml: item.isHtml,
          content: vv
        });
      }
      this.rows.push(cs);
    }
  }

  private addSummaryRow() {
    this.checkDatatableSetting();

    const fs: IRow = {
      id: '',
      columns: []
    };
    if (!this.datatableSetting.headers.some(a => a.isSum)) {
      return;
    }
    for (const item of this.datatableSetting.headers) {
      if (!item.isEnabled) {
        continue;
      }
      if (!item.isSum) {
        fs.columns.push({
          isHtml: item.isHtml,
          content: ''
        });
        continue;
      }

      let tTotal = 0;
      for (const row of this.data) {
        const vv = row[item.propName];
        tTotal += +vv;
      }
      if (item.converter) {
        tTotal = item.converter.to(tTotal);
      }
      fs.columns.push({
        isHtml: item.isHtml,
        content: tTotal
      });
    }
    this.footers.push(fs);
  }

  private checkDatatableSetting() {
    if (!this.datatableSetting) {
      throw new Error('please set up the datatableSetting property');
    }
  }

}
