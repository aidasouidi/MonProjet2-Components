
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';

const routes = [
  {path: '', component: WelcomeComponent},
  {path: 'list', component: ProductsListComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }
