import { Routes } from '@angular/router';
import { ProductsList } from './features/products/components/products-list/products-list';
import { CategoriesList } from './features/categories/components/categories-list/categories-list'
import { EpHome } from './features/home/ep-home/ep-home';
import { Login } from "./features/security/components/login/login";
import { SecurityRoutes } from './features/security/security.routes';
import { authGuard } from './core/guards/auth-guard';
import { Payment } from './features/payment/payment/payment';

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
    path: 'products/register-event',  // <-- must exactly match your link
    loadComponent: () =>
      import('./features/products/components/register-event/register-event')
        .then(m => m.RegisterUser),
    title: 'Register Event'
  },
  {
    path: 'categories',
    component: CategoriesList,
    title: 'Categories'
  },
  { path: 'cart', 
    loadComponent: () => import('./features/cart/components/cart/cart').then(m => m.CartComponent), 
    title: 'Cart'
   },
     {
    path: 'payment',
    component: Payment,
    title: 'payment'
  },
  {
    path: "auth",
    children: [
      ...SecurityRoutes
    ]
  },
   
]
