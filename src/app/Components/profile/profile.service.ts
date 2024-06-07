import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3001/api/profile';
  constructor(private http: HttpClient, private auth: AuthService) { }

  getUserProfile(): Observable<User> {
    const token = this.auth.getToken();
    if (!token) {
      return throwError('Token not found');
    }
    const headers = new HttpHeaders().set('x-auth-token', token);
    return this.http.get<User>(this.apiUrl, { headers }).pipe(
      catchError(err => {
        // console.error("Error fetching user profile", err);
        return throwError(err);
      })
    );
  }

  updateProfile(username: string, email: string): Observable<User> {
    const token = this.auth.getToken();
    if (!token) {
      return throwError("Token not found");
    }
    const headers = new HttpHeaders().set('x-auth-token', token);
    return this.http.put<User>(this.apiUrl, { username, email }, { headers }).pipe(
      catchError(err => {
        // console.error("Error updating user profile!", err);
        return throwError(err);
      })
    );
  }
}
