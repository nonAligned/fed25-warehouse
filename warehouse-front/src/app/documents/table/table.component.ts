import { Document } from './../../model/document.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wh-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() documents: Document[];
  @Output() sortChange: EventEmitter<any> = new EventEmitter();
  sortDirection: string = "";
  sort: string = "";
  @Input() visibility = {
    doc: true,
    dor: true,
    status: true,
    trans: true,
    bp: true,
    bpl: true,
    year: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  updateSort(newSort: string) {
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else if (this.sortDirection == "desc") {
      this.sortDirection = "asc";
    } else if (this.sortDirection == "") {
      this.sortDirection = "asc";
    }
    this.sort = newSort;
    let sortParams = {
      sort: this.sort,
      sortDirection: this.sortDirection
    }
    this.sortChange.emit(sortParams);
  }

}
