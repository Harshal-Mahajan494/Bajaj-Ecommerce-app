import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthRequest } from '../../models/auth-request';
import { AuthResponse } from '../../models/auth-response';
import { SecurityApi } from '../../services/securirty-api';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private _securityApi = inject(SecurityApi);
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);

  protected user: AuthRequest = new AuthRequest();
  protected authResponse?: AuthResponse;
  protected authErrorMessage: string = '';
  private _returnUrl: string = '';
  public isLoggedIn = false;

   constructor(private securityApi: SecurityApi, private router: Router) {}

  ngOnInit(): void {
    this._returnUrl = this._activatedRoute.snapshot.queryParams['returnUrl'] || '/products';
  }

 onSubmit(form: NgForm) {
    if (form.valid) {
      this.securityApi.login(this.user).subscribe({
        next: (res: AuthResponse) => {
   

          // Store necessary data in localStorage
          localStorage.setItem('userEmail', this.user.email);
          localStorage.setItem('userRole', res.user.role);
          localStorage.setItem('token', res.token);
        
         
          this.router.navigate(['']); // redirect after login
        },
        error: () => {
          console.error('Error during authentication:');
          this.authErrorMessage = 'Invalid email or password.';
        }
      });
    }
  }
}
