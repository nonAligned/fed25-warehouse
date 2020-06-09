import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wh-table-settings',
  templateUrl: './table-settings.component.html',
  styleUrls: ['./table-settings.component.css']
})
export class TableSettingsComponent implements OnInit {
  open: boolean = false;
  @Output() visibilityChange: EventEmitter<any> = new EventEmitter();
  visibility = {
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

  toggleSettings() {
    this.open = !this.open;
  }

  updateVisible() {
    this.visibilityChange.emit(this.visibility);
  }

}
