

export class SortTableData {

  constructor(
    public columns: SortTableColumn[] = [],
    public data: SortTableRowData[] = [],
    public sorts: ISortable[] = []
  ) { }

  private _sortedData: SortTableRowData[];
  get sortedData(): SortTableRowData[] {
    if(!this._sortedData) {
      this._sortedData = this.data.sort((a, b) => {
        let res = 0;
        for(let i = 0; i < this.sorts.length; i++) {
          res = this.sorts[i].sort(a, b);
          if(res !== 0) { break; }
        }
        return res;
      });
    }

    return this._sortedData;
  }
  resetSort(): void {
    this._sortedData = null;
  }
}


export class SortTableColumn {
  public key: string;
  public title: string;
  public sort: ISortable;

  constructor(columnKey: string, columnTitle?: string) {
    this.key = columnKey;
    this.title = columnTitle || this.key;
    this.sort = new DefaultSort(this.key);
  }
}
export interface ISortable {
  key: string;
  asc: boolean;
  sort: (a: any, b: any) => number;
}

export class DefaultSort implements ISortable {
  public key: string;
  public asc: boolean;

  constructor(key: string, asc: boolean = true) {
    this.key = key;
    this.asc = asc;
  }

  sort(a: any, b: any): number {
    let order = this.asc ? 1 : -1;
    return order * (a[this.key] < b[this.key]
      ? -1
      : a[this.key] > b[this.key]
        ? 1
        : 0);
  }
}

export interface SortTableRowData {
  [key: string]: any;
}
