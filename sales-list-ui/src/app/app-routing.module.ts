import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemEditComponent} from "./item-edit/item-edit.component";
import {ItemListComponent} from "./item-list/item-list.component";

const routes: Routes = [
  {
    path: 'item-list',
    component: ItemListComponent
  },
  {
    path: 'item-add',
    component: ItemEditComponent
  },
  {
    path: 'item-edit/:id',
    component: ItemEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
