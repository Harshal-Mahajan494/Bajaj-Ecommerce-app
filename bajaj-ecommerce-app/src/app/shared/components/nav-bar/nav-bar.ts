import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { Login } from '../../../features/security/components/login/login';
@Component({
  selector: 'bajaj-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  
}
