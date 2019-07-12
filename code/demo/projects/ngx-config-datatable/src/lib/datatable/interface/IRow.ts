export interface IRow {
  id: string;
  columns: {
    isHtml: boolean;
    content: any;
  }[];
}
