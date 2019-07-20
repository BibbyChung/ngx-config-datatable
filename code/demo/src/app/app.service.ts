import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IDatatableSetting } from './../../projects/ngx-config-datatable/src/lib/datatable/interface/IDatatableSetting';
import { F2eHelper } from './timeHelper';

export interface IFakeData {
  id: string;
  name: string;
  dtInserted: number;
  isEnabled: string;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getDatatableSetting() {
    const setting: IDatatableSetting = {
      headers: [
        {
          propName: 'name',
          text: '名稱',
          sort: 'desc',
          isHtml: false,
          isSortable: true,
          isEnabled: true
        },
        {
          propName: 'dtInserted',
          text: '加入日期',
          sort: 'none',
          isHtml: false,
          isSortable: true,
          isEnabled: true,
          converter: {
            to: (v: any) => F2eHelper.getTimestampToDateStr(v, 'YYYY-MM-DD')
          }
        },
        {
          propName: 'isEnabled',
          text: '狀態',
          sort: 'none',
          isHtml: false,
          isSortable: true,
          isEnabled: true,
          converter: {
            to: (v: any) => {
              if (v === 'Y') {
                return '啟用';
              }
              return '不啟用';
            }
          }
        },
        {
          propName: 'total',
          text: '營業額',
          sort: 'none',
          isHtml: false,
          isSortable: true,
          isEnabled: true,
          isSum: true,
          converter: {
            to: (v: number) => Number(v).toLocaleString('en-GB')
          }
        },
      ]
    };

    return setting;
  }

  getData() {
    const fakeData: IFakeData[] = [];

    for (let i = 0; i < 5; i++) {
      fakeData.push({
        id: F2eHelper.getUUID4(),
        name: `Bibby Chung ${i}`,
        dtInserted: 1562949789,
        isEnabled: 'Y',
        total: 78987 + i
      });
      fakeData.push({
        id: F2eHelper.getUUID4(),
        name: `Rose11 ${i}`,
        dtInserted: 1562849789,
        isEnabled: 'N',
        total: 2341 + i
      });
    }

    return of(fakeData);
  }
}
