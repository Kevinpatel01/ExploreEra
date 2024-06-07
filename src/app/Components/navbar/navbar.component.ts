import { ServicesService } from './../../services.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { location } from '../../../locationmodule';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { ToastrService } from 'ngx-toastr';

interface Location {
  category: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  searchActive = false;
  categories: string[] = [];
  locations: location[] = [];

  constructor(private http: HttpClient, private service: ServicesService, private router: Router, public authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  toggleSearch() {
    this.searchActive = !this.searchActive;
  }

  toggleMobileNav() {
    const nav = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    if (nav && menuToggle) {
      nav.classList.toggle('mobile-nav');
      menuToggle.classList.toggle('is-active');
    }
  }
  fetchCategories() {
    this.http.get<Location[]>("http://localhost:3000/locations").subscribe(
      (data: Location[]) => {
        const uniqueCategories = [...new Set<string>(data.map(location => location.category))];
        this.categories = uniqueCategories.filter(category => typeof category === "string");
      },
      (error) => {
        console.log("Error fetching categories: ", error);
      }
    )
  }

  searchLocations(query: string) {
    query = query.charAt(0).toUpperCase() + query.slice(1);
    if (query.trim() !== '') {
      this.service.searchLocationsByName(query).subscribe((locations) => {
        this.locations = locations;
        this.router.navigate(["/search"], {
          state: { locations: this.locations }
        });
      });
    }
  }

  logout() {
    this.toastr.success("Loggedout");
    this.router.navigate(["/"]);
    this.authService.logout();
  }
}
