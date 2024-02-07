import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'product-list',
    loadChildren: () =>
      import('./components/product-list/product-list.module').then(
        (m) => m.ProductListModule
      ),
  },
  {
    path: 'product-list/:keyword',
    loadChildren: () =>
      import('./components/product-list/product-list.module').then(
        (m) => m.ProductListModule
      ),
  },
  {
    path: 'product-bycategory/:id',
    loadChildren: () =>
      import('./components/product-list/product-list.module').then(
        (m) => m.ProductListModule
      ),
  },
  {
    path: 'product-detail',
    loadChildren: () =>
      import('./components/product-detail/product-detail.module').then(
        (m) => m.ProductDetailModule
      ),
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./components/user-profile/user-profile.module').then((m) => m.UserProfileModule)
  },
  {
    path: 'category-list',
    loadChildren: () =>
      import('./components/category-list/category-list.module').then(
        (m) => m.CategoryListModule
      ),
  },
  {
    path: 'subcategory',
    loadChildren: () =>
      import('./components/subcategory/subcategory.module').then(
        (m) => m.SubcategoryModule
      ),
  },
  {
    path: 'allCategories',
    loadChildren: () =>
      import('././components/all-categories/all-categories.module').then(
        (m) => m.AllCategoriesModule
      ),
  },
];
