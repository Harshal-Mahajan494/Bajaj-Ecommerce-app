import { Component ,inject} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'bajaj-payment',
  imports: [],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  private router = inject(Router);
 confirmPayment() {
    
  alert("payment done Sucessfully");  
  this.router.navigate(['/products']);
}
}
