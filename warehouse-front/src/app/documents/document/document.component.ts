import { ItemList } from './../../model/item-list.model';
import { ArticleList } from './../../model/article-list.model';
import { DocumentsService } from './../../services/documents.service';
import { Document } from './../../model/document.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'wh-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  document: Document;
  articles: ArticleList;
  items: ItemList;
  id: number
  constructor(private service: DocumentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.updateDocument();
      this.service.getArticles().subscribe(data => {
        this.articles = data;
        this.updateItems();
      });
    });
    
  }

  updateDocument() {
    this.service.getDocumentById(this.id).subscribe(data => {
      this.document = data;
    });
  }

  updateItems() {
    this.service.getItems(this.id).subscribe(dataItems => {
      this.items = dataItems;
      this.mapItems();
    });
  }

  mapItems() {
    this.items.results.forEach(elem => {
      for(let i in this.articles.results) {
        if (elem.article == this.articles.results[i].code) {
          elem.article = this.articles.results[i].name;
          break;
        }
      }
    });
  }

  addItem(newItem: Item) {
    newItem.documents = this.document._id;
    this.service.addItem(newItem).subscribe(data => {
      this.items.results.push(data);
      this.mapItems();
    });
  }

}
