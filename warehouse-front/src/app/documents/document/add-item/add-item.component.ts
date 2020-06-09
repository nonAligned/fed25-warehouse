import { Item } from './../../../model/item.model';
import { Article } from './../../../model/article.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wh-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() articles: Article[];
  @Output() itemSubmit: EventEmitter<Item> = new EventEmitter();
  newItem = {
    article: "",
    price: null,
    quantity: null 
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    let tempItem = new Item(this.newItem);
    this.itemSubmit.emit(tempItem);
  }

}
