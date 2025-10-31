import { Component ,inject} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart/services/cart';
 
@Component({
  selector: 'bajaj-payment',
  imports: [],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  private router = inject(Router);
  private cartService = inject(CartService);
 confirmPayment() {
    
  alert("payment done Sucessfully");  
  this.cartService.clear();
  this.router.navigate(['/products']);
}
}
