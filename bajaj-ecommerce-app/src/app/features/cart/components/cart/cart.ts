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
      // 👉 If user is logged in, navigate to payment page
      alert("Payment done successful");
      this,this.router.navigate(['']);
    } else {
      // 👉 Otherwise, go to login first
      alert('Please login to continue checkout!');
      this.router.navigate(['/auth/login']);
    }
  }
}
