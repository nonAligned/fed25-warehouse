import { DocumentList } from './../model/document-list.model';
import { DocumentsService } from './../services/documents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wh-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: DocumentList;
  parameters = {
    sort: "",
    sortDirection: "",
    page: 1,
    pageSize: 10
  }
  visibility = {
    doc: true,
    dor: true,
    status: true,
    trans: true,
    bp: true,
    bpl: true,
    year: true
  }

  constructor(private service: DocumentsService) { }

  ngOnInit(): void {
    this.updateDocuments();
  }

  updateDocuments() {
    this.service.getDocuments(this.parameters).subscribe(data => {
      this.documents = data;
    });
  }

  updateParams(newParams) {
    if (newParams.page) {
      this.parameters.page = newParams.page;
    } else if (newParams.sort) {
      this.parameters.sort = newParams.sort;
      this.parameters.sortDirection = newParams.sortDirection;
    }
    this.updateDocuments();
  }

  updateVisibility(newVisibility) {
    this.visibility = newVisibility;
  }

}
