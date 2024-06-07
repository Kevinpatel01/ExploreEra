import { location } from './../../../locationmodule';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationstateserviceService } from '../../navigationstateservice.service';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  formData: any;
  locationdetail: any;
  totalPrice: number = 0;

  constructor(
    private router: Router,
    private navigationstateservice: NavigationstateserviceService,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    const state = this.navigationstateservice.getState();
    // console.log("Retrieved state: ", state);
    if (state) {
      this.formData = state.formData;
      this.locationdetail = state.location;
      this.calculateTotalPrice();
      // console.log("Form Data: ", this.formData);
      // console.log("Location Detail: ", this.locationdetail);
      // console.log("Total Price : ", this.totalPrice);
    } else {
      console.log("Navigation state is missing.")
    }
  }

  calculateTotalPrice() {
    if (this.formData && this.locationdetail) {
      // console.log("Raw number of persons: ", this.formData.persons);
      // console.log("Raw price per person: ", this.locationdetail.cost);

      const numberofpersons = this.formData.persons;
      const sanitizedPriceString = this.locationdetail.cost.replace(/[^\d.]/g, '')
      // const priceperperson = this.locationdetail.cost;

      if (!isNaN(numberofpersons) && !isNaN(sanitizedPriceString)) {
        this.totalPrice = numberofpersons * sanitizedPriceString;
        // console.log("Total price calculated: ", this.totalPrice);
      } else {
        console.error("Invalid number of persons or price per person");
      }
    }
  }

  pay() {
    const bookingData = {
      ...this.formData,
      location: this.locationdetail,
      totalPrice: this.totalPrice
    };

    this.bookingService.saveBooking(bookingData).subscribe(
      response => {
        // console.log("Booking saved successfully", response);
        this.router.navigate(["/pay"]);
      },
      error => {
        console.log("Error occured in booking", error);
      }
    );
  }
}
