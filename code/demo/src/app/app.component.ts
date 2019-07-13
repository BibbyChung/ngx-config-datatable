import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDatatableSetting, IHeader } from '../../projects/ngx-config-datatable/src/public-api';
import { AppService, IFakeData } from './app.service';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  datatableSetting: IDatatableSetting;
  fakeData$: Observable<IFakeData[]>;
  sortHeader: IHeader;

  constructor(private appSer: AppService) {
  }

  ngOnInit(): void {
    this.datatableSetting = this.appSer.getDatatableSetting();
  }

  rowCommand({ id, type }: { id: string, type: string }) {
    console.log(type);
  }

  show(event: Event) {
    event.preventDefault();
    this.fakeData$ = this.appSer.getData();
  }

  sortCommand(info: IHeader) {
    console.log(info);

    // this.paginationSetting = {
    //   pagerItemSize: 5,
    //   currentIndex: 0,
    //   dataTotal: 0,
    //   dataSize: 10,
    // };
  }
}
