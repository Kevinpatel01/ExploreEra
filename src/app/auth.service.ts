import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3001';
  private loggedInuserEmail: string | null = null;

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string) {
    return this.http.post(`${this.baseUrl}/register`, { username, email, password });
  }

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, { email, password }).pipe(
      map((response: any) => {
        if (response && response.token) {
          this.saveToken(response.token);
          this.loggedInuserEmail = email;
        }
        return response;
      })
    );
  }

  getLoggedInUserEmail(): string | null {
    console.log("E-mail is: ", this.getLoggedInUserEmail)
    return this.loggedInuserEmail;

  }

  saveToken(token: string): void {
    localStorage.setItem("token", token);
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token');
    } else {
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
