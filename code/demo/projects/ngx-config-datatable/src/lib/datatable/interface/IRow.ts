import { IIdObject } from './IIdObject';

export interface IRow {
  id: string;
  rowData: IIdObject;
  columns: {
    isHtml: boolean;
    content: any;
  }[];
}
