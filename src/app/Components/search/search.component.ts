import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { location } from '../../../locationmodule';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  locations: any[] = [];

  constructor(private router: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.paramMap.subscribe((params) => {
        if (window.history.state.locations) {
          this.locations = window.history.state.locations;
        }
      });
    }
  }
}
