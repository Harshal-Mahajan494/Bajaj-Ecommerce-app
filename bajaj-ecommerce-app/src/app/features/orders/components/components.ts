import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../modelss/order';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './components.html',
  styleUrls: ['./components.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  ngOnInit() {
    // ✅ Load orders directly from localStorage instead of API
    const raw = localStorage.getItem('orders');
   

    if (raw) {
      try {
        this.orders = JSON.parse(raw);
         console.log();
      } catch (error) {
        console.error('Error parsing local orders', error);
        this.orders = [];
      }
    } else {
      console.log('No orders found in localStorage');
      this.orders = [];
    }
  }
}
