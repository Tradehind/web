import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListRoutingModule {}
