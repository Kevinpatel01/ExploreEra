import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../Pages/book/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookingService.getBookings().subscribe(
      data => {
        this.bookings = data;
        console.log("data : ", data);
      },
      err => {
        console.log("Error loading bookings: ", err);
      }
    );
  }
}
