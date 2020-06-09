import { DocumentComponent } from './documents/document/document.component';
import { DocumentsComponent } from './documents/documents.component';
import { AboutComponent } from './core/about/about.component';
import { HomepageComponent } from './core/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "home", component: HomepageComponent},
  {path: "about", component: AboutComponent},
  {path: "documents", component: DocumentsComponent},
  {path: "documents/:id", component: DocumentComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
