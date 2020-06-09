import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wh-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() size: number;
  @Input() page: number;
  @Input() pageSize: number;
  @Output() pageChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updatePage(newPage: number) {
    this.page = newPage;
    this.pageChange.emit({
      page: newPage
    });
  }

}
