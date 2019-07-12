import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHeader } from '../../interface/IHeader';

@Component({
  selector: 'cdt-btn-sort',
  templateUrl: './btn-sort.component.html',
  styleUrls: ['./btn-sort.component.scss']
})
export class BtnSortComponent implements OnInit {

  @Input() info: IHeader;
  @Output() clickLink = new EventEmitter<IHeader>();

  constructor() { }

  ngOnInit() {
  }

  click(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    if (!this.info.isSortable) {
      return;
    }

    this.changeSort();
    this.clickLink.emit(this.info);
  }

  private changeSort() {
    if (this.info.sort === 'none') {
      this.info.sort = 'asc';
      return;
    }

    if (this.info.sort === 'asc') {
      this.info.sort = 'desc';
      return;
    }

    if (this.info.sort === 'desc') {
      this.info.sort = 'asc';
      return;
    }
  }

}
