import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blog, location } from '../locationmodule';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = "http://localhost:3000/locations";
  url1 = "http://localhost:3000/blogs";
  constructor(private http: HttpClient) { }

  getLocations(): Observable<location[]> {
    return this.http.get<location[]>(this.url)
  }

  getLocationDetail(id: string): Observable<location[]> {
    return this.http.get<location[]>("http://localhost:3000/locations/" + id);
  }

  getCategory(category: string) {
    return this.http.get<location[]>("http://localhost:3000/locations/" + category);
  }

  getBlogs() {
    return this.http.get<blog[]>(this.url1);
  }

  getlocationsByCategory(category: string): Observable<location[]> {
    return this.http.get<location[]>(`${this.url}?category=${category}`);
  }

  searchLocationsByName(name: string): Observable<location[]> {
    const params = new HttpParams().set('place', name);
    return this.http.get<location[]>(`${this.url}`, { params })
      .pipe(
        catchError(error => {
          console.error('Error searching locations by name:', error);
          throw error;
        })
      );
  }
}
