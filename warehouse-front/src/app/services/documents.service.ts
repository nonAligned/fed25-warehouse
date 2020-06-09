import { Item } from './../model/item.model';
import { ItemList } from './../model/item-list.model';
import { ArticleList } from './../model/article-list.model';
import { Document } from './../model/document.model';
import { DocumentList } from './../model/document-list.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL: string = "http://localhost:3000/api/documents";
const URL_ARTICLES: string = "http://localhost:3000/api/articles";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }

  getDocuments(parameters?: any): Observable<DocumentList> {
    let queryParams = {};
    if (parameters) {
      queryParams = {
        params: new HttpParams()
        .set("sort", parameters.sort && parameters.sort.toString() || "")
        .set("sortDirection", parameters.sortDirection && parameters.sortDirection.toString() || "")
        .set("page", parameters.page && parameters.page.toString() || "")
        .set("pageSize", parameters.pageSize && parameters.pageSize.toString() || "")
      }
    }

    return this.http.get(URL, queryParams).pipe(map(data => {
      return new DocumentList(data);
    }));
  }

  getDocumentById(id: number): Observable<Document> {
    return this.http.get(URL + "/" + id).pipe(map(data => {
      return new Document(data);
    }));
  }

  getArticles(): Observable<ArticleList> {
    return this.http.get(URL_ARTICLES).pipe(map(data => {
      return new ArticleList(data);
    }));
  }

  getItems(id: number): Observable<ItemList> {
      return this.http.get(URL + "/" + id + "/items").pipe(map(data => {
        return new ItemList(data);
    }));
  }

  addItem(newItem: Item): Observable<Item> {
    return this.http.post(URL + "/" + newItem.documents + "/items", newItem).pipe(map(data => {
      return new Item (data);
    }));
  }

  recordDocument(document: Document): Observable<Document> {
    return this.http.put(URL + "/" + document._id, document).pipe(map(data => {
      return new Document(data);
    }));
  }
}
