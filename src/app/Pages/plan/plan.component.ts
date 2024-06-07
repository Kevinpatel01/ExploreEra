import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';
import { NavigationstateserviceService } from '../../navigationstateservice.service';
import { AuthService } from '../../auth.service';
import { emailMatcher } from '../../Validators/emailMatcher.validator';
import { date } from '../../Validators/date.validator';
import { BookingService } from '../book/booking.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  form!: FormGroup;
  locationdetail: any;
  loggedinEmail: string | null;
  maxEndDate: Date | null = null;
  minDuration: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ServicesService,
    private navigationstateservice: NavigationstateserviceService,
    private authService: AuthService,
    private bookingService: BookingService
  ) {
    this.loggedinEmail = this.authService.getLoggedInUserEmail();
  }

  ngOnInit(): void {
    const state = this.navigationstateservice.getState();
    if (state && state.location) {
      this.locationdetail = state.location;
      // console.log("Location detail received in PlanComponent: ", this.locationdetail);

      if (this.locationdetail.duration) {
        const durationParts = this.locationdetail.duration.split(' ');
        this.minDuration = parseInt(durationParts[0], 10);
      }
    } else {
      console.log("No location detail in navigation state");
    }

    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, emailMatcher(this.loggedinEmail)]],
      persons: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
      startdate: ['', [Validators.required, date.dateNotinPast()]],
      enddate: ['', [Validators.required, date.dateNotinPast()]],
    });

    this.form.get('startdate')?.valueChanges.subscribe((startDate: string) => {
      if (startDate && this.minDuration !== null) {
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + this.minDuration);
        this.maxEndDate = endDate;

        this.form.get('enddate')?.setValidators([
          Validators.required,
          date.dateNotinPast(),
          date.maxDate(this.maxEndDate),
          date.minDuration(this.minDuration)
        ]);
        this.form.get('enddate')?.updateValueAndValidity();
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid && this.locationdetail) {
          const navigationstate = {
            formData: this.form.value,
            location: this.locationdetail
          };
          // console.log("Navigating with state: ", navigationstate);
          this.navigationstateservice.setState(navigationstate);
          this.router.navigate(['/book']);
    } else {
      console.log("Form is invalid or location detail is missing.")
    }
  }
}

