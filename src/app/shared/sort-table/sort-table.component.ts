import { Component, HostListener, Input, OnChanges, ChangeDetectorRef } from '@angular/core';

import { ResponsiveBase } from '../../responsive-base';
import { SortTableColumn, SortTableData, SortTableRowData } from './sort-table.types';

@Component({
  selector: 'sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss']
})
export class SortTable extends ResponsiveBase {
  @HostListener('window:resize', ['$event'])
    onWindowResize(evt: any) {
      this.onResize(evt);
    }
  @Input() data: SortTableRowData[] = [];

  private sortTableData: SortTableData;

  constructor(private changeDetector: ChangeDetectorRef) {
    super();
   }

   ngOnInit() {
     let cols = Object.keys(this.data[0] || {});
     let columns = cols.map(col => new SortTableColumn(col));
     this.sortTableData = new SortTableData(columns, this.data);
   }

   ngOnChanges(arg1: any, arg2: any) {
     console.log('WTF', arg1, arg2);
   }

   setSort(col: SortTableColumn) {
     console.log('sort: ', col.key);
     this.sortTableData.resetSort();
     this.sortTableData.sorts = [col.sort];
     this.changeDetector.markForCheck();
   }
}
