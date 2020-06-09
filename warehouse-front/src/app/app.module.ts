import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './core/homepage/homepage.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeaderComponent } from './core/header/header.component';
import { DocumentsComponent } from './documents/documents.component';
import { PaginationComponent } from './documents/pagination/pagination.component';
import { TableSettingsComponent } from './documents/table-settings/table-settings.component';
import { TableComponent } from './documents/table/table.component';
import { DocumentComponent } from './documents/document/document.component';
import { DataPanelComponent } from './documents/document/data-panel/data-panel.component';
import { ItemsTableComponent } from './documents/document/items-table/items-table.component';
import { AddItemComponent } from './documents/document/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    NavbarComponent,
    HeaderComponent,
    DocumentsComponent,
    PaginationComponent,
    TableSettingsComponent,
    TableComponent,
    DocumentComponent,
    DataPanelComponent,
    ItemsTableComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
