import { Routes } from '@angular/router';
import { ProductsList } from './features/products/components/products-list/products-list';
import {CategoriesList} from './features/categories/components/categories-list/categories-list'
import { EpHome } from './features/home/ep-home/ep-home';
import { Login } from "./features/security/components/login/login";

export const routes: Routes = [
  {
    path: '',
    component: EpHome,
    title: 'Home'
  },
  {
    path: 'products',
    component: ProductsList,
    title: 'Product List'
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  { 
    path: 'categories', 
    component: CategoriesList, 
    title: 'Categories'
   },
    {
        path:"login",
        component: Login,
        title : "Login"
    },
];
