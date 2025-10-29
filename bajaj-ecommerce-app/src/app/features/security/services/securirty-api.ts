import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRequest } from '../models/auth-request';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class SecurirtyApi {

  // ✅ Your backend runs on port 9090
  private apiUrl = 'http://localhost:9090/api/auth';

  constructor(private http: HttpClient) {}

  // ✅ API call for login
  login(request: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, request);
  }
}
