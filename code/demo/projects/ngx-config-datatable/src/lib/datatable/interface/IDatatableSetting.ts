import { IHeader } from './IHeader';
import { IRowCommand } from './IRowCommand';

export interface IDatatableSetting {
  rowCommands: IRowCommand[];
  headers: IHeader[];
}
