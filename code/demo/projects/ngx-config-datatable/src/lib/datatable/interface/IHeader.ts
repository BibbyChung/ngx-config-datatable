import { IConverter } from './IConverter';

export interface IHeader {
  propName: string;
  text: string;
  sort: 'none' | 'asc' | 'desc';
  isSortable: boolean;
  isEnabled: boolean;
  isHtml: boolean;
  isSum?: boolean;
  converter?: IConverter;
}
