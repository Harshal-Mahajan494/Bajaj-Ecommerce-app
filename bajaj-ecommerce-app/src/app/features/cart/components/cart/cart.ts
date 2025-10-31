import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartItem, CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {
  private cart = inject(CartService);
  private router = inject(Router);

  items: CartItem[] = [];
  showLoginPopup = false; 

  ngOnInit(): void {
    this.cart.cart$.subscribe(items => this.items = items);
  }

  remove(id: string) {
    this.cart.removeItem(id);
  }

  changeQty(id: string, e: Event) {
    const v = +(e.target as HTMLInputElement).value;
    this.cart.updateQuantity(id, v);
  }

  clear() {
    this.cart.clear();
  }

  getTotal() {
    return this.cart.getTotal();
  }

  checkout() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/payment']);
    
    } else {

      this.showLoginPopup = true;
       
    }
  }

 
  closePopup() {
    this.showLoginPopup = false;
  }

  goToLogin() {
    this.showLoginPopup = false;
    this.router.navigate(['/auth/login'], { queryParams: { redirect: 'cart' } });
  }
  
}
