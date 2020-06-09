import { DocumentsService } from './../../../services/documents.service';
import { Document } from './../../../model/document.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wh-data-panel',
  templateUrl: './data-panel.component.html',
  styleUrls: ['./data-panel.component.css']
})
export class DataPanelComponent implements OnInit {
  @Input() document: Document;

  constructor(private service: DocumentsService) { }

  ngOnInit(): void {
  }

  recordDocument() {
    let currentDate = new Date();
    this.document.dateOfRecording = currentDate.toISOString();
    this.document.status = "recorded";
    this.service.recordDocument(this.document).subscribe();
  }

}
