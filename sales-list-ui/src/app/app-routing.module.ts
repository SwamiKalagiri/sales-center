import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemEditComponent} from "./item-edit/item-edit.component";
import {ItemListComponent} from "./item-list/item-list.component";
import {OktaCallbackComponent} from "@okta/okta-angular";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: LoginComponent
  },
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
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
