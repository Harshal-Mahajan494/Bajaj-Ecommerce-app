import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  images?: string[];
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  private items$ = new BehaviorSubject<CartItem[]>([]);

  readonly cart$ = this.items$.asObservable();

  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.items$.next([...this.items]);
  }

  private load() {
    const raw = localStorage.getItem('cart');
    if (raw) {
      try {
        this.items = JSON.parse(raw);
      } catch {
        this.items = [];
      }
    }
    this.items$.next([...this.items]);
  }

  addToCart(product: any) {
    const id = product._id ?? product.id ?? product.sku ?? product.name;
    const existing = this.items.find(i => i._id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      const item: CartItem = {
        _id: id,
        name: product.name,
        price: product.price ?? product.cost ?? 0,
        images: product.images,
        quantity: 1
      };
      this.items.push(item);
    }
    this.save();
  }

  removeItem(id: string) {
    this.items = this.items.filter(i => i._id !== id);
    this.save();
  }

  updateQuantity(id: string, qty: number) {
    const it = this.items.find(i => i._id === id);
    if (!it) return;
    it.quantity = Math.max(1, Math.floor(qty));
    this.save();
  }

  clear() {
    this.items = [];
    this.save();
  }

  getTotal() {
    return this.items.reduce((s, i) => s + i.price * i.quantity, 0);
  }
}
