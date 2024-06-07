import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  constructor(private router: Router) { }

  viewBookingSummary() {
    this.router.navigate(["/booking"]);
  }
}
