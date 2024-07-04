import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  "styles": ['./app.component.css',
    "node_modules\ngx-toastr\toastr.css"
  ]
})
export class AppComponent implements OnInit {
  showNavbar: boolean = true;
  showFooter: boolean = true;
  title = 'app';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !["/", "/register"].includes(event.urlAfterRedirects);
        this.showFooter = !["/", "/register", "/profile", "/search"].includes(event.urlAfterRedirects);
      }
    });
  }
}
