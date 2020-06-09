import { Item } from './../../../model/item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wh-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {
  @Input() items: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
